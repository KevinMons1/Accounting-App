import { createInvoiceArticleFactory, createInvoiceFactory } from '@/modules/invoice/__test__/factories/invoice-factory';
import { invoiceService } from '@/modules/invoice/domain/services/invoice-service';

describe('invoiceService', () => {
  it('should calculate total amount of one article', () => {
    const article = createInvoiceArticleFactory({ price: 10, quantity: 2 });

    const total = invoiceService.calculateArticleTotal(article.price, article.quantity);

    expect(total).toBe(20);
  })

  it('should calculate total amount of all articles', () => {
    const articles = [
      createInvoiceArticleFactory({ price: 10, quantity: 2 }),
      createInvoiceArticleFactory({ price: 10, quantity: 3 })
    ];

    const total = invoiceService.calculateSubtotal(articles);

    expect(total).toBe(50);
  })

  it('should calculate VAT of one article', () => {
    const article = createInvoiceArticleFactory({ price: 10, vat: 20 });

    const priceWithVat = invoiceService.calculateVatAmount(article.price, article.vat);

    expect(priceWithVat).toBe(2);
  });

  it('should calculate the vatTotal', () => {
    const article = [
      createInvoiceArticleFactory({ price: 10, vat: 20 }),
      createInvoiceArticleFactory({ price: 30, vat: 20 })
    ];

    const vatTotal = invoiceService.calculateVatTotal(article);

    expect(vatTotal).toBe(8);
  });

  it('should apply the VAT amount on the total amount', () => {
    let invoice = createInvoiceFactory({
      articles: [createInvoiceArticleFactory({ price: 10, quantity: 2, vat: 20 })],
    });

    invoice.vatTotal = invoiceService.calculateVatTotal(invoice.articles);
    invoice.subtotal = invoiceService.calculateSubtotal(invoice.articles);
    invoice.total = invoiceService.calculateTotal(invoice);

    expect(invoice.total).toBe(22);
  })
})
