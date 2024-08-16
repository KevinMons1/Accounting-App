'use client';
import React from 'react';
import useCreateInvoice from '@/react/invoices/create/hooks/use-create-invoice';
import { Input } from '@/react/components/ui/input';
import { Button } from '@/react/components/ui/button';
import { Label } from '@/react/components/ui/label';

const InvoiceCreateForm = () => {
  const { isLoading, errorMessage, handleAddArticle, handleChange, onSubmit } = useCreateInvoice();

  return (
    <form>
      <div>
        {isLoading && <p>Loading...</p>}
        {errorMessage && <p>{errorMessage}</p>}
        <Label htmlFor='description'>Description</Label>
        <Input name='description' onChange={handleChange} />
        <Label htmlFor='quantity'>Quantity</Label>
        <Input name='quantity' type='number' onChange={handleChange} />
        <Label htmlFor='quantity'>Price</Label>
        <Input name='price' type='number' onChange={handleChange} />
        <Label htmlFor='vat'>VAT</Label>
        <Input name='vat' onChange={handleChange} />
        <Button type='button' onClick={handleAddArticle}>
          Add Article
        </Button>
        <Button type='submit' onClick={onSubmit}>
          Save
        </Button>
      </div>
    </form>
  );
};

export default InvoiceCreateForm;
