import { InvoiceRepository } from '@/modules/invoice/domain/repositories/invoice-repository';
import { mapCreateInvoiceToDto } from '@/modules/invoice/application/mappers/create-invoice-mapper';
import { CreateInvoice, InvoiceBase } from '@/modules/invoice/domain/types/invoice';
import { mapInvoicesDtoToInvoiceData } from '@/modules/invoice/application/mappers/viewer-invoices-mapper';
import { invoiceService } from '../../domain/services/invoice-service';

export const invoiceAppService = (invoiceRepository: InvoiceRepository) => {
  return {
    getInvoices: async (): Promise<InvoiceBase[]> => {
      const invoices = await invoiceRepository.getInvoices();
      return mapInvoicesDtoToInvoiceData(invoices);
    },
    createInvoice: async (data: CreateInvoice): Promise<void> => {
      const invoice = { ...data };

      invoice.subtotal = invoiceService.calculateSubtotal(invoice.articles);
      invoice.vatTotal = invoiceService.calculateVatTotal(invoice.articles);
      invoice.total = invoiceService.calculateTotal(invoice.subtotal, invoice.vatTotal);

      const invoiceDto = mapCreateInvoiceToDto(invoice);
      await invoiceRepository.createInvoice(invoiceDto);
    },
  };
};
