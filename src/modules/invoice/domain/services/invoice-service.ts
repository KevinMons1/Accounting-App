import { InvoiceArticle } from '@/modules/invoice/domain/types/invoice';
import { Invoice } from '@/modules/invoice/domain/entities/invoice';

export const invoiceService = {
  calculateArticleTotal: (price: number, quantity: number): number => {
    return price * quantity;
  },
  calculateVatAmount: (amount: number, vat: number): number => {
    return amount * (vat / 100);
  },
  calculateSubtotal: (articles: InvoiceArticle[]): number => {
    return articles.reduce((acc, article) => {
      return acc + invoiceService.calculateArticleTotal(article.price, article.quantity)
    }, 0);
  },
  calculateVatTotal: (articles: InvoiceArticle[]): number => {
    return articles.reduce((acc, article) => acc + invoiceService.calculateVatAmount(article.price, article.vat), 0);
  },
  calculateTotal: (invoice: Invoice): number => {
    return invoice.subtotal + invoice.vatTotal;
  },
};
