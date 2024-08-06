import {AnyAction, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import invoicesSlice from "@/redux/slices/invoices-slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const store = configureStore({
    reducer: {
        invoices: invoicesSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
