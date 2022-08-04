import { Test, TestingModule } from '@nestjs/testing';
import { ComprobanteDeRetencionController } from './comprobante-de-retencion.controller';

describe('ComprobanteDeRetencionController', () => {
  let controller: ComprobanteDeRetencionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComprobanteDeRetencionController],
    }).compile();

    controller = module.get<ComprobanteDeRetencionController>(ComprobanteDeRetencionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
