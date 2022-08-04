import { Test, TestingModule } from '@nestjs/testing';
import { FacturaDetalleController } from './factura-detalle.controller';

describe('FacturaDetalleController', () => {
  let controller: FacturaDetalleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FacturaDetalleController],
    }).compile();

    controller = module.get<FacturaDetalleController>(FacturaDetalleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
