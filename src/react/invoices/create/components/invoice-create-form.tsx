'use client';
import React from 'react';
import useCreateInvoice from "@/react/invoices/create/hooks/useCreateInvoice";

const InvoiceCreateForm = () => {
    const {
        state,
        addArticle,
        onSubmit
    } = useCreateInvoice();

    console.log(state);

    return (
        <form>
            <button type='button' onClick={() => addArticle()}>Add Article</button>
        </form>
    );
};

export default InvoiceCreateForm;
