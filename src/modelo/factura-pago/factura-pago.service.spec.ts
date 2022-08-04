import { Test, TestingModule } from '@nestjs/testing';
import { FacturaPagoService } from './factura-pago.service';

describe('FacturaPagoService', () => {
  let service: FacturaPagoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacturaPagoService],
    }).compile();

    service = module.get<FacturaPagoService>(FacturaPagoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
