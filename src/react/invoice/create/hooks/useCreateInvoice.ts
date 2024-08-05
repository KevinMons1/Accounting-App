import { useState } from "react";
import {InvoiceArticle} from "@/modules/invoice/domain/types/invoice";

const UseCreateInvoice = () => {
    const [articles, setArticles] = useState<InvoiceArticle[]>([]);

    return {
        articles,
    };
};

export default UseCreateInvoice;
