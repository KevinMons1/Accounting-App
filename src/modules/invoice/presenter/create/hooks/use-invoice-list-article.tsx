import { useAppSelector } from '@/modules/shared/redux/stores/store';

const UseInvoiceListArticle = () => {
  const { invoice } = useAppSelector((state) => state.invoiceCreate);

  return {
    articles: invoice.articles,
  };
};

export default UseInvoiceListArticle;
