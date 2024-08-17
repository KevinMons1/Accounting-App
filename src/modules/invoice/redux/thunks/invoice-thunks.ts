import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateInvoice, InvoiceBase } from '@/modules/invoice/domain/types/invoice';
import { createInvoiceUseCase } from '../../application/use-cases/create-invoice.usecase';
import { _invoiceRepository } from '../../configs/invoice-config';
import { getInvoicesUseCase } from '../../application/use-cases/get-invoices.usecase';

export const getInvoices = createAsyncThunk<InvoiceBase[], void>('invoices/getBase', async (_, { rejectWithValue }) => {
  let result: InvoiceBase[] = [];
  try {
    result = await getInvoicesUseCase(_invoiceRepository)();
  } catch (error) {
    rejectWithValue(error);
  }
  return result;
});

export const createInvoice = createAsyncThunk<void, CreateInvoice>(
  'invoices/create',
  async (data: CreateInvoice, { rejectWithValue }) => {
    try {
      await createInvoiceUseCase(_invoiceRepository)(data);
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
