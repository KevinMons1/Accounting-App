import React from 'react';
import InvoicesTable from '../components/table/invoices-table';
import LayoutBase from '@/modules/shared/presenter/components/layouts/layout-base';

const InvoicesViewerPage = () => {
  return (
    <LayoutBase>
      <div className='container mx-auto'>
        <h1 className='mb-10 text-4xl font-bold'>My Invoices</h1>
        <InvoicesTable />
      </div>
    </LayoutBase>
  );
};

export default InvoicesViewerPage;
