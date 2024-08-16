import { Invoice } from '@/modules/invoice/domain/entities/invoice';
import { CreateInvoice, InvoiceArticle, InvoiceBase } from '@/modules/invoice/domain/types/invoice';
import { CreateInvoiceDto, InvoiceArticleDto, InvoiceBaseDto, InvoiceDto } from '@/modules/invoice/domain/dto/invoice';

const createdAt = new Date().toString();

export const createInvoiceArticleFactory = (overrides?: Partial<InvoiceArticle>): InvoiceArticle => {
  return {
    description: 'Bread',
    quantity: 1,
    price: 1,
    vat: 0,
    ...overrides,
  };
};

export const createInvoiceArticleDtoFactory = (overrides?: Partial<InvoiceArticle>): InvoiceArticleDto => {
  return {
    id: 1,
    invoice_id: 1,
    description: 'Bread',
    quantity: 1,
    price: 1,
    vat: 0,
    ...overrides,
  };
};

export const createInvoiceFactory = (overrides?: Partial<Invoice>): Invoice => {
  return {
    id: 1,
    articles: [createInvoiceArticleFactory()],
    total: 0,
    subtotal: 0,
    vatTotal: 0,
    createdAt: createdAt,
    ...overrides,
  };
};

export const createInvoiceDtoFactory = (overrides?: Partial<Invoice>): InvoiceDto => {
  return {
    id: 1,
    invoice_articles: [
      createInvoiceArticleDtoFactory({
        price: 10,
        quantity: 1,
        vat: 20,
      }),
    ],
    total: 12,
    subtotal: 10,
    vat_total: 2,
    created_at: createdAt,
    ...overrides,
  };
};

export const createInvoiceBaseDtoFactory = (overrides?: Partial<InvoiceBaseDto>): InvoiceBaseDto => {
  return {
    id: 1,
    total: 12,
    subtotal: 10,
    vat_total: 2,
    created_at: createdAt,
    ...overrides,
  };
};

export const createInvoiceBaseFactory = (overrides?: Partial<InvoiceBase>): InvoiceBase => {
  return {
    id: 1,
    total: 12,
    subtotal: 10,
    vatTotal: 2,
    createdAt: createdAt,
    ...overrides,
  };
};

export const createInvoiceCompletedFactory = (overrides?: Partial<Invoice>): Invoice => {
  return {
    id: 1,
    articles: [
      createInvoiceArticleFactory({
        price: 10,
        quantity: 1,
        vat: 20,
      }),
    ],
    total: 12,
    subtotal: 10,
    vatTotal: 2,
    createdAt: createdAt,
    ...overrides,
  };
};

export const createCreateInvoiceDtoFactory = (overrides?: Partial<Invoice>): CreateInvoiceDto => {
  return {
    id: 1,
    invoice_articles: [
      createInvoiceArticleFactory({
        price: 10,
        quantity: 1,
        vat: 20,
      }),
    ],
    total: 12,
    subtotal: 10,
    vat_total: 2,
    created_at: createdAt,
    ...overrides,
  };
};

export const createCreateInvoiceFactory = (overrides?: Partial<CreateInvoice>): CreateInvoice => {
  return {
    articles: [
      createInvoiceArticleFactory({
        price: 6,
        quantity: 2,
        vat: 20,
      }),
    ],
    vatTotal: 2,
    subtotal: 10,
    total: 12,
    ...overrides,
  };
};
