import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/stores/store';
import { addArticle } from '@/react/invoices/create/slices/invoice-create-slice';
import { InvoiceArticle } from '@/modules/invoice/domain/types/invoice';
import { createInvoice } from '@/redux/thunks/invoice-thunks';
import { v4 as uuidv4 } from 'uuid';

const initialState: InvoiceArticle = {
  articleId: '',
  description: '',
  price: 0,
  quantity: 0,
  vat: 0,
} as const;

const UseCreateInvoice = () => {
  const dispatch = useAppDispatch();
  const { invoice, isLoading, errorMessage } = useAppSelector((state) => state.invoiceCreate);
  const [state, setState] = useState<InvoiceArticle>({ ...initialState });

  const handleAddArticle = () => {
    dispatch(
      addArticle({
        articleId: uuidv4(),
        ...state,
      })
    );
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(createInvoice(invoice));
  };

  return {
    invoice,
    state,
    isLoading,
    errorMessage,
    handleChange,
    handleAddArticle,
    onSubmit,
  };
};

export default UseCreateInvoice;
