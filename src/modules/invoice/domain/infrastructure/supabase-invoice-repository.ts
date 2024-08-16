import { InvoiceRepository } from '@/modules/invoice/domain/repositories/invoice-repository';
import { CreateInvoiceDto, InvoiceBaseDto } from '@/modules/invoice/domain/dto/invoice';
import { supabase } from '@/configs/supabase-config';

export const supabaseInvoiceRepository = (): InvoiceRepository => {
  return {
    getInvoices: async (): Promise<InvoiceBaseDto[]> => {
      const { data, error } = await supabase.from('invoices').select('*');

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    createInvoice: async (data: CreateInvoiceDto): Promise<void> => {
      const { invoice_articles, total, subtotal, vat_total } = data;

      const { data: invoice, error: invoiceError } = await supabase
        .from('invoices')
        .insert({
          total,
          subtotal,
          vat_total,
        })
        .select();

      if (invoiceError) {
        throw new Error(invoiceError.message);
      }

      const invoiceId = invoice[0].id;

      const invoiceItems = invoice_articles.map((article) => ({
        ...article,
        invoice_id: invoiceId,
      }));

      const { error: itemsError } = await supabase.from('invoice_articles').insert(invoiceItems);

      if (itemsError) {
        throw new Error(itemsError.message);
      }
    },
  };
};
