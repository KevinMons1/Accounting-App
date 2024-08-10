import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateInvoice } from '@/modules/invoice/domain/types/invoice';
import { _invoiceAppService } from '@/configs/invoice-config';

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
