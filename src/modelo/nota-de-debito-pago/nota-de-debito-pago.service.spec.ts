import { Test, TestingModule } from '@nestjs/testing';
import { NotaDeDebitoPagoService } from './nota-de-debito-pago.service';

describe('NotaDeDebitoPagoService', () => {
  let service: NotaDeDebitoPagoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotaDeDebitoPagoService],
    }).compile();

    service = module.get<NotaDeDebitoPagoService>(NotaDeDebitoPagoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
