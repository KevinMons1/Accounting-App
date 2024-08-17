import { Skeleton } from '@/react/components/ui/skeleton';
import { TableCell, TableRow } from '@/react/components/ui/table';
import React from 'react';

const InvoiceTableRowsLoader = () => {
  return (
    <>
      <TableRow>
        <TableCell colSpan={4}>
          <Skeleton className='h-10 w-full' />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={4}>
          <Skeleton className='h-10 w-full' />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={4}>
          <Skeleton className='h-10 w-full' />
        </TableCell>
      </TableRow>
    </>
  );
};

export default InvoiceTableRowsLoader;
