import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/stores/store';
import { addArticle } from '@/redux/slices/invoice-create-slice';
import { InvoiceArticle } from '@/modules/invoice/domain/types/invoice';
import { v4 as uuidv4 } from 'uuid';
import { createInvoice } from '@/redux/thunks/invoice-thunks';

const initialState: InvoiceArticle = {
  description: '',
  price: 0,
  quantity: 0,
} as const;

const UseCreateInvoice = () => {
  const dispatch = useAppDispatch();
  const { invoice, isLoading, errorMessage } = useAppSelector((state) => state.invoiceCreate);
  const [state, setState] = useState<InvoiceArticle>({ ...initialState });

  const handleAddArticle = () => {
    dispatch(
      addArticle({
        id: uuidv4(),
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
