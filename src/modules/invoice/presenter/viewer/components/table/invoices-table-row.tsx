import React from 'react';
import { InvoiceBase } from '@/modules/invoice/domain/types/invoice';
import { TableCell, TableRow } from '@/modules/shared/presenter/components/ui/table';
import InvoicesTableCellActions from './invoices-table-cell-actions';

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
      <TableCell>
        <InvoicesTableCellActions id={data.id} />
      </TableCell>
    </TableRow>
  );
};

export default InvoicesTableRow;
