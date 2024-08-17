import React from 'react';
import { Eye } from 'lucide-react';
import Link from 'next/link';

type Props = {
  id: number;
};

const InvoicesTableCellActions = ({ id }: Props) => {
  return (
    <Link href={`/invoices/${id}`} aria-label='View Invoice'>
      <Eye className='w-5' />
    </Link>
  );
};

export default InvoicesTableCellActions;
