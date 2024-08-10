import { useAppSelector } from '@/redux/stores/store';

const UseInvoiceListArticle = () => {
  const { invoice } = useAppSelector((state) => state.invoiceCreate);

  return {
    articles: invoice.articles,
  };
};

export default UseInvoiceListArticle;
