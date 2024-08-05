import {Invoice} from "@/modules/invoice/domain/entities/invoice";

export interface InvoiceRepository<T extends Invoice = Invoice> {
    saveInvoice(invoice: T): Promise<void>
}
