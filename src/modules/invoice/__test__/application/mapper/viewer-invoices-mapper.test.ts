import {
  createInvoiceBaseDtoFactory,
  createInvoiceBaseFactory,
} from '@/modules/invoice/__test__/factories/invoice-factory';
import { mapInvoicesDtoToInvoiceData } from '@/modules/invoice/application/mappers/viewer-invoices-mapper';

describe('viewerInvoicesMapper', () => {
  it('should map invoices dto to a invoices data', () => {
    const invoicesDto = [createInvoiceBaseDtoFactory()];
    const invoicesData = mapInvoicesDtoToInvoiceData(invoicesDto);
    expect(invoicesData).toEqual([createInvoiceBaseFactory()]);
  });
});
