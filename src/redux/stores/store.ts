import {configureStore} from "@reduxjs/toolkit";
import invoicesSlice from "@/redux/slices/invoices-slice";

const store = configureStore({
    reducer: {
        invoices: invoicesSlice.reducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
