import { InvoiceRepository } from '@/modules/invoice/domain/repositories/invoice-repository';
import {
  createCreateInvoiceFactory,
  createInvoiceBaseFactory,
  createInvoiceDtoFactory,
} from '@/modules/invoice/__test__/factories/invoice-factory';
import { invoiceAppService } from '@/modules/invoice/application/services/invoice-app-service';
import { mapCreateInvoiceToDto } from '@/modules/invoice/application/mappers/create-invoice-mapper';

jest.mock('@/modules/invoice/domain/services/invoice-service');
jest.mock('@/modules/invoice/application/mappers/create-invoice-mapper');
jest.mock('@/modules/invoice/domain/services/invoice-service');

describe('invoiceAppService', () => {
  let mockInvoiceRepository: jest.Mocked<InvoiceRepository>;

  beforeEach(() => {
    mockInvoiceRepository = {
      createInvoice: jest.fn(),
      getInvoices: jest.fn(),
    };

    jest.clearAllMocks();
  });

  describe('getInvoices', () => {
    it('should get invoices', async () => {
      const appService = invoiceAppService(mockInvoiceRepository);
      const mockInvoicesDto = [createInvoiceDtoFactory()];
      const mockInvoices = [createInvoiceBaseFactory()];

      mockInvoiceRepository.getInvoices.mockResolvedValueOnce(mockInvoicesDto);

      const invoices = await appService.getInvoices();

      expect(mockInvoiceRepository.getInvoices).toHaveBeenCalled();
      expect(invoices).toEqual(mockInvoices);
    });

    it('should handle errors thrown by the repository', async () => {
      const error = new Error('Repository error');
      const appService = invoiceAppService(mockInvoiceRepository);

      mockInvoiceRepository.getInvoices.mockRejectedValueOnce(error);

      await expect(appService.getInvoices()).rejects.toThrow(error);
    });
  });

  describe('createInvoice', () => {
    const mockCreateInvoiceData = createCreateInvoiceFactory();

    it('should create an invoice using the repository', async () => {
      const appService = invoiceAppService(mockInvoiceRepository);

      (mapCreateInvoiceToDto as jest.Mock).mockReturnValue(mockCreateInvoiceData);

      await appService.createInvoice(mockCreateInvoiceData);

      expect(mockInvoiceRepository.createInvoice).toHaveBeenCalledWith(mockCreateInvoiceData);
    });

    it('should handle errors thrown by the repository', async () => {
      const error = new Error('Repository error');
      const appService = invoiceAppService(mockInvoiceRepository);

      mockInvoiceRepository.createInvoice.mockRejectedValueOnce(error);

      await expect(appService.createInvoice(mockCreateInvoiceData)).rejects.toThrow(error);
      expect(mockInvoiceRepository.createInvoice).toHaveBeenCalledWith(mockCreateInvoiceData);
    });
  });
});
