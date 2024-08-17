import { TableCell, TableRow } from '@/modules/shared/presenter/components/ui/table';

type Props = {
  errorMessage: string;
};

const InvoicesTableTowsError = ({ errorMessage }: Props) => {
  return (
    <TableRow>
      <TableCell colSpan={4}>
        <p>{errorMessage}</p>
      </TableCell>
    </TableRow>
  );
};

export default InvoicesTableTowsError;
