import { createInvoiceFactory } from '@/modules/invoice/__test__/factories/invoice-factory';
import { mapCreateInvoiceToDto } from '@/modules/invoice/application/mappers/create-invoice-mapper';

describe('create invoice mapper', () => {
  it('should map a create invoice to a create invoice dto', () => {
    const createInvoice = createInvoiceFactory({
      id: '123',
      articles: [
        createInvoiceFactory({
          description: 'Bread',
          quantity: 1,
          price: 1,
          vat: 0,
        }),
      ],
      createdAt: new Date(),
      total: 0,
      subtotal: 0,
      vatTotal: 0,
    });

    const createInvoiceDto = mapCreateInvoiceToDto(createInvoice);

    expect(createInvoiceDto).toEqual({
      articles: [
        {
          description: 'Bread',
          quantity: 1,
          price: 1,
        },
      ],
      total: 0,
      subtotal: 0,
      vat_total: 0,
    });
  });
});
