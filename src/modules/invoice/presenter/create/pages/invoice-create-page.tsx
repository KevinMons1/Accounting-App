'use client';
import React from 'react';
import InvoiceListArticle from '../components/invoice-list-article';
import LayoutBase from '@/modules/shared/presenter/components/layouts/layout-base';
import InvoiceCreateForm from '../components/invoice-create-form';
import InvoicePdfViewer from '../../shared/components/pdf-viewer/invoice-pdf-viewer';

const InvoiceCreatePage = () => {
  return (
    <LayoutBase>
      <div className='container mx-auto flex h-full flex-col'>
        <h1 className='mb-10 text-4xl font-bold'>Create Invoice</h1>
        <div className='bg-red grid flex-grow grid-cols-2 gap-10'>
          <div>
            <InvoiceCreateForm />
            <InvoiceListArticle />
          </div>
          <InvoicePdfViewer />
        </div>
      </div>
    </LayoutBase>
  );
};

export default InvoiceCreatePage;
