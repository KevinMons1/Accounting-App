import {InvoiceArticle} from "@/modules/invoice/domain/types/invoice";

export type Invoice = {
    id: string;
    articles: InvoiceArticle[];
    createdAt: Date;
    totalAmount: number;
}

export const calculateTotalAmount = (articles: InvoiceArticle[]): number => {
    return articles.reduce((acc, curr) => {
        return acc + (curr.price * curr.quantity);
    }, 0);
};
