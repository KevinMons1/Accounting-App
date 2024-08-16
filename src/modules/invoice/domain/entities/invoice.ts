import { InvoiceArticle } from '@/modules/invoice/domain/types/invoice';

export type Invoice = {
  id: number;
  articles: InvoiceArticle[];
  createdAt: string;
  total: number;
  subtotal: number;
  vatTotal: number;
};
