'use client';
import React from 'react';
import useGetInvoices from '../../hooks/use-get-invoices';
import InvoicesTableTowsError from './invoices-table-rows-error';
import InvoicesTableRows from './invoices-table-rows';
import InvoicesTableRowsLoader from './invoices-table-rows-loader';
import { TableBody } from '@/modules/shared/presenter/components/ui/table';

const InvoicesTableBody = () => {
  const { invoices, isLoading, isError, errorMessage, canShowInvoices } = useGetInvoices();

  return (
    <TableBody>
      {isLoading && <InvoicesTableRowsLoader />}
      {isError && <InvoicesTableTowsError errorMessage={errorMessage} />}
      {canShowInvoices && <InvoicesTableRows data={invoices} />}
    </TableBody>
  );
};

export default InvoicesTableBody;
