import {InvoiceArticle} from "@/modules/invoice/domain/types/invoice";

export type CreateInvoice = {
    articles: InvoiceArticle[];
    totalAmount: Pick<InvoiceArticle, "totalAmount">;
};

