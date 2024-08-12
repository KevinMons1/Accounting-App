type InvoiceArticleDto = {
  id: string;
  description: string;
  quantity: number;
  price: number;
  vat: number;
};

export type CreateInvoiceArticleDto = {
  description: string;
  quantity: number;
  price: number;
};

export type CreateInvoiceDto = {
  articles: CreateInvoiceArticleDto[];
  total: number;
  subtotal: number;
  vat_total: number;
};

export type InvoiceDto = {
  id: string;
  articles: InvoiceArticleDto[];
  createdAt: Date;
  total: number;
  subtotal: number;
  vat_total: number;
}
