import { InvoiceRepository } from '@/modules/invoice/domain/repositories/invoice-repository';
import { CreateInvoiceDto } from '@/modules/invoice/domain/dto/invoice';
import { Invoice } from '@/modules/invoice/domain/entities/invoice';
import { supabase } from '@/configs/supabase-config';

export const supabaseInvoiceRepository = (): InvoiceRepository<Invoice> => {
  return {
    getInvoices: async (): Promise<Invoice[]> => {
      const { data, error } = await supabase.from('invoices').select('*');

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    createInvoice: async (data: CreateInvoiceDto): Promise<void> => {
      const { articles, total } = data;

      const { data: invoice, error: invoiceError } = await supabase
        .from('invoices')
        .insert({ total })
        .select();

      if (invoiceError) {
        throw new Error(invoiceError.message);
      }

      const invoiceId = invoice![0].id!;

      const invoiceItems = articles.map((article) => ({
        invoice_id: invoiceId,
        description: article.description,
        quantity: article.quantity,
        price: article.price,
        vat: article.vat,
      }));

      const { error: itemsError } = await supabase.from('invoice_articles').insert(invoiceItems);

      if (itemsError) {
        throw new Error(itemsError.message);
      }
    },
  };
};
