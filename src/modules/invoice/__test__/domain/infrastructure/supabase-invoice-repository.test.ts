import {
  createCreateInvoiceDtoFactory,
  createInvoiceBaseFactory,
} from '@/modules/invoice/__test__/factories/invoice-factory';
import { supabaseInvoiceRepository } from '@/modules/invoice/domain/infrastructure/supabase-invoice-repository';
import { supabase } from '@/configs/supabase-config';

jest.mock('@/configs/supabase-config', () => ({
  supabase: {
    from: jest.fn(),
  },
}));

describe('supabaseInvoiceRepository', () => {
  const mockInvoiceDto = createCreateInvoiceDtoFactory();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getInvoices', () => {
    it('should return invoices successfully', async () => {
      const mockInvoices = [createInvoiceBaseFactory()];
      const mockSelect = jest.fn().mockResolvedValueOnce({
        data: mockInvoices,
        error: null,
      });

      const mockFrom = jest.fn().mockReturnValue({
        select: mockSelect,
      });

      (supabase.from as jest.Mock).mockImplementation(mockFrom);

      const repository = supabaseInvoiceRepository();

      const invoices = await repository.getInvoices();

      expect(supabase.from).toHaveBeenCalledWith('invoices');
      expect(mockSelect).toHaveBeenCalledWith('*');
      expect(invoices).toEqual(mockInvoices);
    });

    it('should throw and error if get invoices fails', async () => {
      const mockSelect = jest.fn().mockResolvedValueOnce({
        data: null,
        error: {
          message: 'Get invoices failed',
        },
      });

      const mockFrom = jest.fn().mockReturnValue({
        select: mockSelect,
      });

      (supabase.from as jest.Mock).mockImplementation(mockFrom);

      const repository = supabaseInvoiceRepository();

      await expect(repository.getInvoices()).rejects.toThrow('Get invoices failed');
    });
  });

  describe('createInvoice', () => {
    it('should create an invoice and its articles successfully', async () => {
      const mockInsert = jest.fn().mockReturnThis();
      const mockSelect = jest.fn().mockResolvedValueOnce({
        data: [{ id: '1' }],
        error: null,
      });
      const mockFrom = jest.fn().mockReturnValue({
        insert: mockInsert,
        select: mockSelect,
      });

      (supabase.from as jest.Mock).mockImplementation(mockFrom);

      const repository = supabaseInvoiceRepository();

      await repository.createInvoice(mockInvoiceDto);

      expect(supabase.from).toHaveBeenCalledWith('invoices');
      expect(mockInsert).toHaveBeenCalledWith({ total: 12, subtotal: 10, vat_total: 2 });
      expect(mockSelect).toHaveBeenCalled();
      expect(supabase.from).toHaveBeenCalledWith('invoice_articles');
      expect(mockInsert).toHaveBeenCalledWith([
        {
          invoice_id: '1',
          description: 'Bread',
          price: 10,
          quantity: 1,
          vat: 20,
        },
      ]);
    });

    it('should throw an error if invoice creation fails', async () => {
      const mockInsert = jest.fn().mockReturnThis();
      const mockSelect = jest.fn().mockResolvedValueOnce({
        data: null,
        error: {
          message: 'Insert failed',
        },
      });
      const mockFrom = jest.fn().mockReturnValue({
        insert: mockInsert,
        select: mockSelect,
      });

      (supabase.from as jest.Mock).mockImplementation(mockFrom);

      const repository = supabaseInvoiceRepository();

      await expect(repository.createInvoice(mockInvoiceDto)).rejects.toThrow('Insert failed');
    });

    it('should throw an error if invoice articles creation fails', async () => {
      const mockInsertInvoice = jest.fn().mockReturnThis();
      const mockSelect = jest.fn().mockResolvedValueOnce({
        data: [{ id: '1' }],
        error: null,
      });
      const mockInsertArticles = jest.fn().mockResolvedValueOnce({
        error: {
          message: 'Items insert failed',
        },
      });
      const mockFrom = jest.fn((table: string) => {
        if (table === 'invoices') {
          return {
            insert: mockInsertInvoice,
            select: mockSelect,
          };
        } else if (table === 'invoice_articles') {
          return {
            insert: mockInsertArticles,
          };
        }
      });

      (supabase.from as jest.Mock).mockImplementation(mockFrom);

      const repository = supabaseInvoiceRepository();

      await expect(repository.createInvoice(mockInvoiceDto)).rejects.toThrow('Items insert failed');
    });
  });
});
