import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Invoice} from "@/modules/invoice/domain/entities/invoice";
import {saveInvoice} from "@/redux/thunks/invoice-thunks";

const initialState = {
    invoices: [] as Invoice[],
}; // check le satisfies SliceState as SliceState,

const invoicesSlice = createSlice({
    name: 'invoices',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(saveInvoice.fulfilled, (state, action: PayloadAction<Invoice>) => {
            state.invoices.push(action.payload);
        });
    },
});

export default invoicesSlice;
