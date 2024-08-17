import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/modules/shared/redux/stores/store';
import { InvoiceArticle } from '@/modules/invoice/domain/types/invoice';
import { createInvoice } from '@/modules/invoice/redux/thunks/invoice-thunks';
import { v4 as uuidv4 } from 'uuid';
import { addArticle } from '../slices/invoice-create-slice';

const initialState: InvoiceArticle = {
  articleId: '',
  description: '',
  price: 0,
  quantity: 0,
  vat: 0,
} as const;

const UseInvoiceCreate = () => {
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

export default UseInvoiceCreate;
