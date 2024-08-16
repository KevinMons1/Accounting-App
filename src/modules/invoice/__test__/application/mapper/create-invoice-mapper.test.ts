import {
  createInvoiceFactory,
  createInvoiceArticleFactory,
} from '@/modules/invoice/__test__/factories/invoice-factory';
import { mapCreateInvoiceToDto } from '@/modules/invoice/application/mappers/create-invoice-mapper';

describe('create invoice mapper', () => {
  it('should map a create invoice to a create invoice dto', () => {
    const createInvoice = createInvoiceFactory({
      id: 1,
      articles: [
        createInvoiceArticleFactory({
          description: 'Bread',
          quantity: 1,
          price: 1,
          vat: 0,
        }),
      ],
      createdAt: new Date().toString(),
      total: 0,
      subtotal: 0,
      vatTotal: 0,
    });

    const createInvoiceDto = mapCreateInvoiceToDto(createInvoice);

    expect(createInvoiceDto).toEqual({
      invoice_articles: [
        {
          description: 'Bread',
          quantity: 1,
          price: 1,
          vat: 0,
        },
      ],
      total: 0,
      subtotal: 0,
      vat_total: 0,
    });
  });
});
