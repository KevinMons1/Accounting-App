import { InvoiceArticleDto, InvoiceBaseDto } from '@/modules/invoice/domain/dto/invoice';
import { InvoiceArticle, InvoiceBase } from '../../domain/types/invoice';

export const mapInvoiceArticlesDtoToInvoiceArticleData = (invoiceArticlesDto: InvoiceArticleDto): InvoiceArticle => {
  return {
    description: invoiceArticlesDto.description,
    quantity: invoiceArticlesDto.quantity,
    price: invoiceArticlesDto.price,
    vat: invoiceArticlesDto.vat,
  };
};

export const mapInvoicesDtoToInvoiceData = (invoicesDto: InvoiceBaseDto[]): InvoiceBase[] => {
  return invoicesDto.map((invoice) => ({
    id: invoice.id,
    total: invoice.total,
    subtotal: invoice.subtotal,
    vatTotal: invoice.vat_total,
    createdAt: invoice.created_at,
  }));
};
