import React from 'react';
import { Table, TableCaption, TableHead, TableHeader, TableRow } from '@/modules/shared/presenter/components/ui/table';
import InvoicesTableBody from './invoices-table-body';

const InvoicesTable = () => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Id</TableHead>
          <TableHead className='w-[25%]'>Subtotal</TableHead>
          <TableHead className='w-[25%]'>VAT Total</TableHead>
          <TableHead className='w-[25%]'>Total</TableHead>
          <TableHead className='w-[100px]'>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <InvoicesTableBody />
    </Table>
  );
};

export default InvoicesTable;
