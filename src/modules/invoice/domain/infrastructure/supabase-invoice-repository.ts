import { InvoiceRepository } from '@/modules/invoice/domain/repositories/invoice-repository';
import { CreateInvoiceDto } from '@/modules/invoice/domain/dto/invoice';
import { Invoice } from '@/modules/invoice/domain/entities/invoice';
import { supabase } from '@/configs/supabase-config';

export const supabaseInvoiceRepository = (): InvoiceRepository<Invoice> => {
  return {
    createInvoice: async (data: CreateInvoiceDto): Promise<void> => {
      const { articles, total_amount } = data;

      const { data: invoice, error: invoiceError } = await supabase
        .from('invoices')
        .insert({ total_amount })
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
      }));

      const { error: itemsError } = await supabase.from('invoice_articles').insert(invoiceItems);

      if (itemsError) {
        throw new Error(itemsError.message);
      }
    },
  };
};
