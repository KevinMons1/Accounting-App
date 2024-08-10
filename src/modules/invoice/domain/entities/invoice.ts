import { InvoiceArticle } from '@/modules/invoice/domain/types/invoice';

export type Invoice = {
  id: string;
  articles: InvoiceArticle[];
  createdAt: Date;
  total: number;
  subtotal: number;
  vatTotal: number;
};
