import { Database } from '@/shared/types/supabase-types';

export type InvoiceArticleDto = Database['public']['Tables']['invoice_articles']['Row'];

export type CreateInvoiceArticleDto = {
  description: string;
  price: number;
  quantity: number;
  vat?: number | null;
};

export type CreateInvoiceDto = Database['public']['Tables']['invoices']['Insert'] & {
  invoice_articles: CreateInvoiceArticleDto[];
};

export type InvoiceDto = Database['public']['Tables']['invoices']['Row'] & {
  invoice_articles: InvoiceArticleDto[];
};

export type InvoiceBaseDto = Database['public']['Tables']['invoices']['Row'];
