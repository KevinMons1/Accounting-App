import { InvoiceRepository } from '../../domain/repositories/invoice-repository';
import { invoiceService } from '../../domain/services/invoice-service';
import { CreateInvoice } from '../../domain/types/invoice';
import { mapCreateInvoiceToDto } from '../mappers/create-invoice-mapper';

export const createInvoiceUseCase =
  (invoiceRepository: InvoiceRepository) =>
  async (data: CreateInvoice): Promise<void> => {
    const invoice = { ...data };

    invoice.subtotal = invoiceService.calculateSubtotal(invoice.articles);
    invoice.vatTotal = invoiceService.calculateVatTotal(invoice.articles);
    invoice.total = invoiceService.calculateTotal(invoice.subtotal, invoice.vatTotal);

    const invoiceDto = mapCreateInvoiceToDto(invoice);
    await invoiceRepository.createInvoice(invoiceDto);
  };
