import React from 'react';
import { Table, TableCaption, TableHead, TableHeader, TableRow } from '@/react/components/ui/table';
import InvoicesTableBody from './invoices-table-body';

const InvoicesTable = () => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Id</TableHead>
          <TableHead>Subtotal</TableHead>
          <TableHead>VAT Total</TableHead>
          <TableHead>Total</TableHead>
        </TableRow>
      </TableHeader>
      <InvoicesTableBody />
    </Table>
  );
};

export default InvoicesTable;
