import InvoicesTableRow from './invoices-table-row';
import { InvoiceBase } from '@/modules/invoice/domain/types/invoice';

type Props = {
  data: InvoiceBase[];
};

const InvoicesTableRows = ({ data }: Props) => {
  return data.map((invoice) => <InvoicesTableRow key={invoice.id} data={invoice} />);
};

export default InvoicesTableRows;
