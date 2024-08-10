import { Invoice } from '@/modules/invoice/domain/entities/invoice';

export interface InvoiceRepository<T extends Invoice = T> {
  createInvoice(invoice: T): Promise<void>;
}
