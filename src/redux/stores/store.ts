import { Action, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import invoiceCreateSlice from '@/react/invoices/create/slices/invoice-create-slice';
import invoicesViewerSlice from '@/react/invoices/viewer/slices/invoices-viewer-slide';

const store = configureStore({
  reducer: {
    invoicesViewer: invoicesViewerSlice.reducer,
    invoiceCreate: invoiceCreateSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, Action>;

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
