import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateInvoice, InvoiceArticle } from '@/modules/invoice/domain/types/invoice';
import { createInvoice } from '@/redux/thunks/invoice-thunks';

interface InvoiceState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  invoice: CreateInvoice;
}

const initialState: InvoiceState = {
  isLoading: false,
  isError: false,
  errorMessage: '',
  invoice: {
    articles: [],
    totalAmount: 0,
  },
} as const;

const invoiceCreateSlice = createSlice<InvoiceState, {}>({
  name: 'invoiceCreate',
  initialState,
  reducers: {
    addArticle: (state, action: PayloadAction<InvoiceArticle>) => {
      state.invoice.articles.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createInvoice.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createInvoice.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action?.error?.message || 'Failed to save invoice';
    });
    builder.addCase(createInvoice.fulfilled, (state) => {
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = '';
      state.invoice = initialState.invoice;
    });
  },
});

export const { addArticle } = invoiceCreateSlice.actions;

export default invoiceCreateSlice;
