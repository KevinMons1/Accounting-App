import { InvoiceRepository } from '@/modules/invoice/domain/repositories/invoice-repository';
import {
  createCreateInvoiceFactory,
  
} from '@/modules/invoice/__test__/factories/invoice-factory';
import { mapCreateInvoiceToDto } from '@/modules/invoice/application/mappers/create-invoice-mapper';
import { createInvoiceUseCase } from '@/modules/invoice/application/use-cases/create-invoice.usecase';

jest.mock('@/modules/invoice/domain/services/invoice-service');
jest.mock('@/modules/invoice/application/mappers/create-invoice-mapper');
jest.mock('@/modules/invoice/domain/services/invoice-service');

describe('invoiceAppService', () => {
  let mockInvoiceRepository: jest.Mocked<InvoiceRepository>;
  const mockCreateInvoiceData = createCreateInvoiceFactory();

  beforeEach(() => {
    mockInvoiceRepository = {
      createInvoice: jest.fn(),
      getInvoices: jest.fn(),
    };

    jest.clearAllMocks();
  });

  it('should create an invoice using the repository', async () => {
    const _createInvoiceUseCase = createInvoiceUseCase(mockInvoiceRepository);

    (mapCreateInvoiceToDto as jest.Mock).mockReturnValue(mockCreateInvoiceData);

    await _createInvoiceUseCase(mockCreateInvoiceData);

    expect(mockInvoiceRepository.createInvoice).toHaveBeenCalledWith(mockCreateInvoiceData);
  });

  it('should handle errors thrown by the repository', async () => {
    const error = new Error('Repository error');
    const _createInvoiceUseCase = createInvoiceUseCase(mockInvoiceRepository);

    mockInvoiceRepository.createInvoice.mockRejectedValueOnce(error);

    await expect(_createInvoiceUseCase(mockCreateInvoiceData)).rejects.toThrow(error);
    expect(mockInvoiceRepository.createInvoice).toHaveBeenCalledWith(mockCreateInvoiceData);
  });
});
