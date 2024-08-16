import React from 'react';
import { TableCell, TableRow } from '@/react/components/ui/table';
import { InvoiceBase } from '@/modules/invoice/domain/types/invoice';

type Props = {
  data: InvoiceBase;
};

const InvoicesTableRow = ({ data }: Props) => {
  return (
    <TableRow>
      <TableCell className='font-medium'>{data.id}</TableCell>
      <TableCell>{data.subtotal} €</TableCell>
      <TableCell>{data.vatTotal} €</TableCell>
      <TableCell>{data.total} €</TableCell>
    </TableRow>
  );
};

export default InvoicesTableRow;
