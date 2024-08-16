import { createSlice } from '@reduxjs/toolkit';
import { getInvoices } from '@/redux/thunks/invoice-thunks';
import { handleFulfilled, handlePending, handleRejected } from '@/shared/utils/redux-utils';
import { InvoiceBase } from '@/modules/invoice/domain/types/invoice';

interface InvoiceState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  invoices: InvoiceBase[];
}

const initialState: InvoiceState = {
  isLoading: false,
  isError: false,
  errorMessage: '',
  invoices: [],
} as const;

const invoicesViewerSlice = createSlice({
  name: 'invoicesViewer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInvoices.pending, (state) => {
      handlePending(state);
    });
    builder.addCase(getInvoices.rejected, (state, action) => {
      handleRejected({ state, errorMessage: action?.error?.message ?? 'Failed to save invoice' });
    });
    builder.addCase(getInvoices.fulfilled, (state, action) => {
      handleFulfilled(state);
      state.invoices = action.payload;
    });
  },
});

export default invoicesViewerSlice;
