import { CreateInvoice } from '@/modules/invoice/domain/types/invoice';
import { InvoiceRepository } from '@/modules/invoice/domain/repositories/invoice-repository';
import { createCreateInvoiceFactory } from '@/modules/invoice/__test__/factories/invoice-factory';
import { invoiceAppService } from '@/modules/invoice/application/services/invoice-app-service';
import { mapCreateInvoiceToDto } from '@/modules/invoice/application/mappers/create-invoice-mapper';

jest.mock('@/modules/invoice/domain/services/invoice-service');
jest.mock('@/modules/invoice/application/mappers/create-invoice-mapper');

describe('invoiceAppService', () => {
  const mockCreateInvoiceData = createCreateInvoiceFactory();
  let mockInvoiceRepository = jest.Mocked<InvoiceRepository<CreateInvoice>>;

  beforeEach(() => {
    mockInvoiceRepository = {
      createInvoice: jest.fn(),
    };

    jest.clearAllMocks();
  });

  describe('getInvoices', () => {

  });

  describe('createInvoice', () => {
    it('should create an invoice using the repository', async () => {
      const service = invoiceAppService(mockInvoiceRepository);

      (mapCreateInvoiceToDto as jest.Mock).mockReturnValue(mockCreateInvoiceData);

      await service.createInvoice(mockCreateInvoiceData);

      expect(mockInvoiceRepository.createInvoice).toHaveBeenCalledWith(mockCreateInvoiceData);
    });

    it('should handle errors thrown by the repository', async () => {
      const error = new Error('Repository error');
      const service = invoiceAppService(mockInvoiceRepository);

      mockInvoiceRepository.createInvoice.mockRejectedValueOnce(error);

      await expect(service.createInvoice(mockCreateInvoiceData)).rejects.toThrow(error);
      expect(mockInvoiceRepository.createInvoice).toHaveBeenCalledWith(mockCreateInvoiceData);
    });
  });
});
