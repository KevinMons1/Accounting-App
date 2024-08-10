type CreateInvoiceArticle = {
  description: string;
  quantity: number;
  price: number;
};

export type CreateInvoiceDto = {
  articles: CreateInvoiceArticle[];
  total: number;
  subtotal: number;
  vat_total: number;
};
