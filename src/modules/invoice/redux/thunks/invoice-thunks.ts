import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateInvoice, InvoiceBase } from '@/modules/invoice/domain/types/invoice';
import { _invoiceAppService } from '@/modules/invoice/configs/invoice-config';

export const getInvoices = createAsyncThunk<InvoiceBase[], void>('invoices/getBase', async (_, { rejectWithValue }) => {
  let result: InvoiceBase[] = [];
  try {
    result = await _invoiceAppService.getInvoices();
  } catch (error) {
    rejectWithValue(error);
  }
  return result;
});

export const createInvoice = createAsyncThunk<void, CreateInvoice>(
  'invoices/create',
  async (data: CreateInvoice, { rejectWithValue }) => {
    try {
      await _invoiceAppService.createInvoice(data);
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
