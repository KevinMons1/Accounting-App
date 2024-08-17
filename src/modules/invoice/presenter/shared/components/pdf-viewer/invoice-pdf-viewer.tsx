import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';
import UseInvoicePdf from '../../hooks/use-invoice-pdf-viewer';

Font.register({
  family: 'Poppins',
  fonts: [
    {
      src: 'http://fonts.gstatic.com/s/poppins/v1/TDTjCH39JjVycIF24TlO-Q.ttf',
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    fontSize: 12,
    fontFamily: 'Poppins',
  },
  container: {
    padding: 16,
  },
  title: {
    fontSize: 40,
    fontWeight: 700,
    marginBottom: 8,
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    marginBottom: 0,
  },
  informations: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  informationsTitle: {
    fontSize: 14,
    marginBottom: 2,
  },
  articles: {
    marginTop: 24,
  },
  articlesHead: {
    flexDirection: 'row',
    gap: 16,
    padding: 4,
    fontSize: 12,
    backgroundColor: '#4791ff',
    color: '#fff',
  },
  articlesRow: {
    flexDirection: 'row',
    gap: 16,
    padding: 4,
    fontSize: 12,
    borderBottom: '1px solid #ccc',
  },
  articlesDescription: {
    width: '100%',
  },
  articlesPrice: {
    width: 150,
  },
  articlesQuantity: {
    width: 150,
  },
  articlesVat: {
    width: 50,
  },
  articlesSubtotal: {
    width: 150,
  },
  articlesTotal: {
    width: 150,
  },
  articlesSummary: {
    marginLeft: 'auto',
    marginTop: 10,
  },
  articlesSummaryItem: {
    marginBottom: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
  },
  articlesSummaryItemTitle: {
    fontWeight: 600,
  },
  articlesSummaryTotal: {
    color: '#4791ff',
    fontWeight: 700,
  },
  articlesSummaryItemPrice: {
    width: 100,
    textAlign: 'right',
  },
  articlesFooter: {
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    padding: 16,
    color: '#fff',
    backgroundColor: '#4791ff',
  },
});

const InvoicePdfViewer = () => {
  const { articles } = UseInvoicePdf();

  return (
    <PDFViewer className='h-full w-full' showToolbar={false}>
      <Document>
        <Page size='A4' style={styles.page}>
          <View style={styles.container}>
            <View>
              <Text style={styles.title}>Invoice #156</Text>
            </View>
            <View style={styles.section}>
              <View style={styles.informations}>
                <View>
                  <Text style={[styles.text, styles.informationsTitle]}>Sales:</Text>
                  <Text style={styles.text}>Kévin Monsieur Société</Text>
                  <Text style={styles.text}>TVA: BE 000 000 000</Text>
                  <Text style={styles.text}>Rue de Narmont, 6</Text>
                  <Text style={styles.text}>5380 Pontillas, Belgique</Text>
                </View>
                <View>
                  <Text style={[styles.text, styles.informationsTitle]}>Customer:</Text>
                  <Text style={styles.text}>Exemple Société</Text>
                  <Text style={styles.text}>TVA: BE 000 000 000</Text>
                  <Text style={styles.text}>Rue de Fer, 1</Text>
                  <Text style={styles.text}>5000 Namur, Belgique</Text>
                </View>
              </View>
            </View>
            <View style={[styles.section, styles.articles]}>
              <View style={styles.articlesHead}>
                <Text style={styles.articlesDescription}>Description</Text>
                <Text style={styles.articlesPrice}>Price</Text>
                <Text style={styles.articlesQuantity}>Quantity</Text>
                <Text style={styles.articlesVat}>VAT</Text>
                <Text style={styles.articlesSubtotal}>Subtotal</Text>
                <Text style={styles.articlesTotal}>Total</Text>
              </View>
              {articles.map((article) => (
                <View key={article.articleId} style={styles.articlesRow}>
                  <Text style={styles.articlesDescription}>{article.description}</Text>
                  <Text style={styles.articlesPrice}>{article.price}</Text>
                  <Text style={styles.articlesQuantity}>{article.quantity}</Text>
                  <Text style={styles.articlesVat}>{article.vat}</Text>
                  <Text style={styles.articlesSubtotal}>0</Text>
                  <Text style={styles.articlesTotal}>0</Text>
                </View>
              ))}
              <View style={styles.articlesRow}>
                <Text style={styles.articlesDescription}>sqfsq</Text>
                <Text style={styles.articlesPrice}>sqfsq</Text>
                <Text style={styles.articlesQuantity}>sqfsq</Text>
                <Text style={styles.articlesVat}>21%</Text>
                <Text style={styles.articlesSubtotal}>sqfsq</Text>
                <Text style={styles.articlesTotal}>sqfsq</Text>
              </View>
              <View style={styles.articlesSummary}>
                <View style={styles.articlesSummaryItem}>
                  <Text style={styles.articlesSummaryItemTitle}>Subtotal:</Text>
                  <Text style={styles.articlesSummaryItemPrice}>51.00€</Text>
                </View>
                <View style={styles.articlesSummaryItem}>
                  <Text style={styles.articlesSummaryItemTitle}>VAT Total:</Text>
                  <Text style={styles.articlesSummaryItemPrice}>21.00€</Text>
                </View>
                <View style={[styles.articlesSummaryItem, styles.articlesSummaryTotal]}>
                  <Text style={styles.articlesSummaryItemTitle}>Total:</Text>
                  <Text style={styles.articlesSummaryItemPrice}>71.00€</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.articlesFooter}>
            <Text>Phone: +32 0471 71 71 71</Text>
            <Text>Email: kevin@monsieursociete.com</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default InvoicePdfViewer;
