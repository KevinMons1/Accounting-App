import { CreateInvoiceDto } from '@/modules/invoice/domain/dto/invoice';
import { CreateInvoice } from '@/modules/invoice/domain/types/invoice';

export const mapCreateInvoiceToDto = (data: CreateInvoice): CreateInvoiceDto => {
  return {
    invoice_articles: data.articles.map((article) => ({
      description: article.description,
      quantity: article.quantity,
      price: article.price,
      vat: article.vat,
    })),
    total: data.total,
    subtotal: data.subtotal,
    vat_total: data.vatTotal,
  };
};
