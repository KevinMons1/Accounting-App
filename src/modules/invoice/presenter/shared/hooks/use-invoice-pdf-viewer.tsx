import { useAppSelector } from '@/modules/shared/redux/stores/store';

const UseInvoicePdfViewer = () => {
  const { invoice } = useAppSelector((state) => state.invoiceCreate);

  return {
    articles: invoice.articles,
  };
};

export default UseInvoicePdfViewer;
