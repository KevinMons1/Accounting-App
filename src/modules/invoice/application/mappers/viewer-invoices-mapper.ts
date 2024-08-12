import { InvoiceDto } from '@/modules/invoice/domain/dto/invoice';
import { Invoice } from '@/modules/invoice/domain/entities/invoice';

export const mapInvoicesDtoToInvoiceData = (invoicesDto: InvoiceDto[]): Invoice[] => {
  return invoicesDto.map(invoice => ({
    id: invoice.id,
    articles: invoice.articles,
    createdAt: invoice.createdAt,
    total: invoice.total,
    subtotal: invoice.subtotal,
    vatTotal: invoice.vat_total,
    createdAt: invoice.created_at,
  }));
};
