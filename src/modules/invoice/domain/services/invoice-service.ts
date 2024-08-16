import { InvoiceArticle } from '@/modules/invoice/domain/types/invoice';

export const invoiceService = {
  calculateArticleTotal: (price: number, quantity: number): number => {
    return price * quantity;
  },
  calculateVatAmount: (amount: number, vat: number): number => {
    return amount * (vat / 100);
  },
  calculateSubtotal: (articles: InvoiceArticle[]): number => {
    return articles.reduce((acc, curr) => {
      return acc + invoiceService.calculateArticleTotal(curr.price, curr.quantity);
    }, 0);
  },
  calculateVatTotal: (articles: InvoiceArticle[]): number => {
    return articles.reduce((acc, curr) => {
      return acc + invoiceService.calculateVatAmount(curr.price, curr.vat ?? 0);
    }, 0);
  },
  calculateTotal: (subtotal: number, vatTotal: number): number => {
    return subtotal + vatTotal;
  },
};
