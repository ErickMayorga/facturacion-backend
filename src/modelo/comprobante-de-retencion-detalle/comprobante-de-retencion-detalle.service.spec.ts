import { Test, TestingModule } from '@nestjs/testing';
import { ComprobanteDeRetencionDetalleService } from './comprobante-de-retencion-detalle.service';

describe('ComprobanteDeRetencionDetalleService', () => {
  let service: ComprobanteDeRetencionDetalleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComprobanteDeRetencionDetalleService],
    }).compile();

    service = module.get<ComprobanteDeRetencionDetalleService>(ComprobanteDeRetencionDetalleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
