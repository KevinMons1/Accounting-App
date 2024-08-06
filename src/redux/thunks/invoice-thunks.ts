import {createFirebaseInvoiceRepository} from "@/modules/invoice/create/infrastructure/firebase/create-firebase-invoice-repository";
import {createInvoiceAppService} from "@/modules/invoice/create/application/services/create-invoice-app-service";
import {CreateInvoice} from "@/modules/invoice/create/domain/entities/invoice";
import {createAsyncThunk} from "@reduxjs/toolkit";

const invoiceRepository = createFirebaseInvoiceRepository();
const invoiceAppService = createInvoiceAppService(invoiceRepository);

export const saveInvoice = createAsyncThunk<CreateInvoice, CreateInvoice>('invoices/save', async (data: CreateInvoice) => {
  await invoiceAppService.saveInvoice(data);
  return data;
});
