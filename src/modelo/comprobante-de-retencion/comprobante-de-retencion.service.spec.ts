import { Test, TestingModule } from '@nestjs/testing';
import { ComprobanteDeRetencionService } from './comprobante-de-retencion.service';

describe('ComprobanteDeRetencionService', () => {
  let service: ComprobanteDeRetencionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComprobanteDeRetencionService],
    }).compile();

    service = module.get<ComprobanteDeRetencionService>(ComprobanteDeRetencionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
