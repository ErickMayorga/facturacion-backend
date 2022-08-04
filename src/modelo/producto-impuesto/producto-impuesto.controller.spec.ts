import { Test, TestingModule } from '@nestjs/testing';
import { ProductoImpuestoController } from './producto-impuesto.controller';

describe('ProductoImpuestoController', () => {
  let controller: ProductoImpuestoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductoImpuestoController],
    }).compile();

    controller = module.get<ProductoImpuestoController>(ProductoImpuestoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
