import {InvoiceRepository} from "@/modules/invoice/domain/repositories/invoice-repository";
import {CreateInvoice} from "@/modules/invoice/create/domain/entities/invoice";
import {createInvoiceService} from "@/modules/invoice/create/domain/services/create-invoice-service";

export const createInvoiceAppService = (invoiceRepository: InvoiceRepository<CreateInvoice>) => {
    const invoiceService = createInvoiceService(invoiceRepository);

    return {
        saveInvoice: async (data: CreateInvoice): Promise<void> => {
            return await invoiceService.createInvoice(data);
        },
    };
}
