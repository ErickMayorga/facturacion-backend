import { Test, TestingModule } from '@nestjs/testing';
import { FacturaPagoController } from './factura-pago.controller';

describe('FacturaPagoController', () => {
  let controller: FacturaPagoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FacturaPagoController],
    }).compile();

    controller = module.get<FacturaPagoController>(FacturaPagoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
