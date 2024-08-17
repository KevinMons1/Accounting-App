import { useAppDispatch, useAppSelector } from '@/modules/shared/redux/stores/store';
import { getInvoices } from '@/modules/invoice/redux/thunks/invoice-thunks';
import { useEffect } from 'react';

const useGetInvoices = () => {
  const dispatch = useAppDispatch();
  const { invoices, isLoading, isError, errorMessage } = useAppSelector((state) => state.invoicesViewer);
  const canShowInvoices = !isLoading && !isError;

  useEffect(() => {
    console.log('render');
    dispatch(getInvoices());
  }, [dispatch]);

  return {
    invoices,
    canShowInvoices,
    isLoading,
    isError,
    errorMessage,
  };
};

export default useGetInvoices;
