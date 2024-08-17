import { Skeleton } from '@/modules/shared/presenter/components/ui/skeleton';
import { TableCell, TableRow } from '@/modules/shared/presenter/components/ui/table';
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
