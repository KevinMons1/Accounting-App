'use client';
import React from 'react';
import useInvoiceListArticle from '@/react/invoices/create/hooks/use-invoice-list-article';

const InvoiceListArticle = () => {
  const { articles } = useInvoiceListArticle();
  console.log(articles);
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>{article.description}</li>
      ))}
    </ul>
  );
};

export default InvoiceListArticle;
