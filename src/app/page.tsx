import InvoicesViewerPage from '@/modules/invoice/presenter/viewer/pages/invoices-viewer-page';
import LayoutBase from '@/modules/shared/presenter/components/layouts/layout-base';

export default function Page() {
  return (
    <LayoutBase>
      <InvoicesViewerPage />
    </LayoutBase>
  );
}
