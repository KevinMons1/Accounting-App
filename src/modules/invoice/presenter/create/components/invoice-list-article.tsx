'use client';
import React from 'react';
import UseInvoiceListArticle from '../hooks/use-invoice-list-article';

const InvoiceListArticle = () => {
  const { articles } = UseInvoiceListArticle();
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.articleId}>{article.description}</li>
      ))}
    </ul>
  );
};

export default InvoiceListArticle;
