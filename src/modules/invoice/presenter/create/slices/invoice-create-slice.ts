import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateInvoice, InvoiceArticle } from '@/modules/invoice/domain/types/invoice';
import { createInvoice } from '@/modules/invoice/redux/thunks/invoice-thunks';
import { handleFulfilled, handlePending, handleRejected } from '@/modules/shared/utils/redux-utils';

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
    total: 0,
    subtotal: 0,
    vatTotal: 0,
  },
} as const;

const invoiceCreateSlice = createSlice({
  name: 'invoiceCreate',
  initialState,
  reducers: {
    addArticle: (state, action: PayloadAction<InvoiceArticle>) => {
      state.invoice.articles.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createInvoice.pending, (state) => {
      handlePending(state);
    });
    builder.addCase(createInvoice.rejected, (state, action) => {
      handleRejected({ state, errorMessage: action?.error?.message ?? 'Failed to create invoice' });
    });
    builder.addCase(createInvoice.fulfilled, (state) => {
      handleFulfilled(state);
      state.invoice = initialState.invoice;
    });
  },
});

export const { addArticle } = invoiceCreateSlice.actions;

export default invoiceCreateSlice;
