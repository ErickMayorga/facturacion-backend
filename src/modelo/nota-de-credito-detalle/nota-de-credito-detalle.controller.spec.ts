import { Test, TestingModule } from '@nestjs/testing';
import { NotaDeCreditoDetalleController } from './nota-de-credito-detalle.controller';

describe('NotaDeCreditoDetalleController', () => {
  let controller: NotaDeCreditoDetalleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotaDeCreditoDetalleController],
    }).compile();

    controller = module.get<NotaDeCreditoDetalleController>(NotaDeCreditoDetalleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
