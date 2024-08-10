import { supabaseInvoiceRepository } from '@/modules/invoice/domain/infrastructure/supabase-invoice-repository';
import { invoiceAppService } from '@/modules/invoice/application/services/invoice-app-service';

export const _invoiceRepository = supabaseInvoiceRepository();
export const _invoiceAppService = invoiceAppService(_invoiceRepository);
