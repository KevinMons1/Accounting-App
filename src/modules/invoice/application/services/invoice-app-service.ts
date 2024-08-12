import { InvoiceRepository } from '@/modules/invoice/domain/repositories/invoice-repository';
import { mapCreateInvoiceToDto } from '@/modules/invoice/application/mappers/create-invoice-mapper';
import { CreateInvoice } from '@/modules/invoice/domain/types/invoice';
import { invoiceService } from '@/modules/invoice/domain/services/invoice-service';

export const invoiceAppService = (invoiceRepository: InvoiceRepository<CreateInvoice>) => {
  return {
    createInvoice: async (data: CreateInvoice): Promise<void> => {
      const invoice = {
        ...data,
        totalAmount: invoiceService.calculateSubtotal(data.articles),
      };
      const invoiceDto = mapCreateInvoiceToDto(invoice);
      await invoiceRepository.createInvoice(invoiceDto);
    },
  };
};
