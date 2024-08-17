import { getInvoicesUseCase } from '@/modules/invoice/application/use-cases/get-invoices.usecase';
import { InvoiceRepository } from '@/modules/invoice/domain/repositories/invoice-repository';
import { createInvoiceBaseFactory, createInvoiceDtoFactory } from '../../factories/invoice-factory';

describe('getInvoicesUseCase', () => {
  let mockInvoiceRepository: jest.Mocked<InvoiceRepository>;

  beforeEach(() => {
    mockInvoiceRepository = {
      createInvoice: jest.fn(),
      getInvoices: jest.fn(),
    };

    jest.clearAllMocks();
  });

  it('should get invoices', async () => {
    const _getInvoiceUseCase = getInvoicesUseCase(mockInvoiceRepository);
    const mockInvoicesDto = [createInvoiceDtoFactory()];
    const mockInvoices = [createInvoiceBaseFactory()];

    mockInvoiceRepository.getInvoices.mockResolvedValueOnce(mockInvoicesDto);

    const invoices = await _getInvoiceUseCase();

    expect(mockInvoiceRepository.getInvoices).toHaveBeenCalled();
    expect(invoices).toEqual(mockInvoices);
  });

  it('should handle errors thrown by the repository', async () => {
    const error = new Error('Repository error');
    const _getInvoiceUseCase = getInvoicesUseCase(mockInvoiceRepository);

    mockInvoiceRepository.getInvoices.mockRejectedValueOnce(error);

    await expect(_getInvoiceUseCase()).rejects.toThrow(error);
  });
});
