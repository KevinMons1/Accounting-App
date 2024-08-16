'use client';
import React from 'react';
import useInvoiceListArticle from '@/react/invoices/create/hooks/use-invoice-list-article';

const InvoiceListArticle = () => {
  const { articles } = useInvoiceListArticle();
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.articleId}>{article.description}</li>
      ))}
    </ul>
  );
};

export default InvoiceListArticle;
