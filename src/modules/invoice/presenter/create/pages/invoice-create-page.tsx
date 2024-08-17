import React from 'react';
import InvoiceCreateForm from '@/react/invoices/create/components/invoice-create-form';
import InvoiceListArticle from '../components/invoice-list-article';

const InvoiceCreatePage = () => {
  return (
    <div>
      <h1>Create Invoice</h1>
      <InvoiceCreateForm />
      <InvoiceListArticle />
    </div>
  );
};

export default InvoiceCreatePage;
