import { Test, TestingModule } from '@nestjs/testing';
import { MetodoDePagoController } from './metodo-de-pago.controller';

describe('MetodoDePagoController', () => {
  let controller: MetodoDePagoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetodoDePagoController],
    }).compile();

    controller = module.get<MetodoDePagoController>(MetodoDePagoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
