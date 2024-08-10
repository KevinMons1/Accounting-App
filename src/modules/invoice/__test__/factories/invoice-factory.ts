import { Invoice } from '@/modules/invoice/domain/entities/invoice';
import { InvoiceArticle } from '@/modules/invoice/domain/types/invoice';

export const createInvoiceArticleFactory = (overrides?: Partial<Invoice>): InvoiceArticle => {
  return {
    description: 'Bread',
    quantity: 1,
    price: 1,
    vat: 0,
    ...overrides,
  };
}

export const createInvoiceFactory = (overrides?: Partial<Invoice>): Invoice => {
  return {
    id: '123',
    articles: [createInvoiceArticleFactory()],
    createdAt: new Date(),
    total: 0,
    subtotal: 0,
    vatTotal: 0,
    ...overrides,
  };
}
