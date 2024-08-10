export type InvoiceArticle = {
  description: string;
  quantity: number;
  price: number;
  vat: number;
};

export type CreateInvoice = {
  articles: InvoiceArticle[];
  totalAmount: number;
};
