import {InvoiceRepository} from "@/modules/invoice/domain/repositories/invoice-repository";
import {CreateInvoice} from "@/modules/invoice/create/domain/entities/invoice";
import {calculateTotalAmount} from "@/modules/invoice/domain/entities/invoice";

export const createInvoiceService = (invoiceRepository: InvoiceRepository<CreateInvoice>) => {
    return {
        createInvoice: async (data: CreateInvoice): Promise<void> => {
            return await invoiceRepository.saveInvoice({
                ...data,
                totalAmount: calculateTotalAmount(data.articles),
            });
        },
    };
};
