import { createInvoiceCompleteFactory, createInvoiceDtoFactory } from '@/modules/invoice/__test__/factories/invoice-factory';
import { mapInvoicesDtoToInvoiceData } from '@/modules/invoice/application/mappers/viewer-invoices-mapper';

describe('viewerInvoicesMapper', () => {
  it('should map invoices dto to a invoices data', () => {
    const invoicesDto = [createInvoiceDtoFactory()];
    const invoicesData = mapInvoicesDtoToInvoiceData(invoicesDto);
    expect(invoicesData).toEqual([createInvoiceCompleteFactory()]);
  });
});
