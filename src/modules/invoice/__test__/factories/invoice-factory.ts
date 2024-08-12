import { Invoice } from '@/modules/invoice/domain/entities/invoice';
import { CreateInvoice, InvoiceArticle } from '@/modules/invoice/domain/types/invoice';
import { CreateInvoiceDto } from '@/modules/invoice/domain/dto/invoice';

const createdAt = new Date();

export const createInvoiceArticleFactory = (overrides?: Partial<Invoice>): InvoiceArticle => {
  return {
    description: 'Bread',
    quantity: 1,
    price: 1,
    vat: 0,
    ...overrides,
  };
};

export const createInvoiceFactory = (overrides?: Partial<Invoice>): Invoice => {
  return {
    id: '123',
    articles: [createInvoiceArticleFactory()],
    createdAt: createdAt,
    total: 0,
    subtotal: 0,
    vatTotal: 0,
    ...overrides,
  };
};

export const createInvoiceCompleteFactory = (overrides?: Partial<Invoice>): Invoice => {
  return {
    id: '123',
    articles: [createInvoiceArticleFactory({
      price: 10,
      quantity: 1,
      vat: 20,
    })],
    total: 12,
    subtotal: 10,
    vatTotal: 2,
    createdAt: createdAt,
    ...overrides,
  };
};


export const createInvoiceDtoFactory = (overrides?: Partial<Invoice>): CreateInvoiceDto => {
  return {
    id: '123',
    articles: [createInvoiceArticleFactory({
      price: 10,
      quantity: 1,
      vat: 20,
    })],
    total: 12,
    subtotal: 10,
    vat_total: 2,
    created_at: createdAt,
    ...overrides,
  };
};

export const createCreateInvoiceFactory = (overrides?: Partial<CreateInvoice>): CreateInvoice => {
  return {
    articles: [createInvoiceArticleFactory({
      price: 6,
      quantity: 2,
      vat: 20,
    })],
    totalAmount: 12,
    ...overrides,
  };
};
