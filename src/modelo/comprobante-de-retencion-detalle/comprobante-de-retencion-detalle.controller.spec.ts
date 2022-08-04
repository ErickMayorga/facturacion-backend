import { Test, TestingModule } from '@nestjs/testing';
import { ComprobanteDeRetencionDetalleController } from './comprobante-de-retencion-detalle.controller';

describe('ComprobanteDeRetencionDetalleController', () => {
  let controller: ComprobanteDeRetencionDetalleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComprobanteDeRetencionDetalleController],
    }).compile();

    controller = module.get<ComprobanteDeRetencionDetalleController>(ComprobanteDeRetencionDetalleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
