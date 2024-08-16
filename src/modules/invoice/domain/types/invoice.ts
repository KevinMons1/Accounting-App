export type InvoiceArticle = {
  articleId?: string;
  description: string;
  quantity: number;
  price: number;
  vat: number | null;
};

export type CreateInvoice = {
  articles: InvoiceArticle[];
  vatTotal: number;
  subtotal: number;
  total: number;
};

export type InvoiceBase = {
  id: number;
  createdAt: string;
  total: number;
  subtotal: number;
  vatTotal: number;
};
