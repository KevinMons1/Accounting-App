import { CreateInvoiceDto, InvoiceBaseDto } from '../dto/invoice';

export interface InvoiceRepository {
  createInvoice(data: CreateInvoiceDto): Promise<void>;

  getInvoices(): Promise<InvoiceBaseDto[]>;
}
