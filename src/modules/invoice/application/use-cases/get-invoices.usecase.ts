import { InvoiceRepository } from '../../domain/repositories/invoice-repository';
import { InvoiceBase } from '../../domain/types/invoice';
import { mapInvoicesDtoToInvoiceData } from '../mappers/viewer-invoices-mapper';

export const getInvoicesUseCase = (invoiceRepository: InvoiceRepository) => async (): Promise<InvoiceBase[]> => {
  const invoices = await invoiceRepository.getInvoices();
  return mapInvoicesDtoToInvoiceData(invoices);
};
