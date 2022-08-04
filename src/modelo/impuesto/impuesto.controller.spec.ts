import { Test, TestingModule } from '@nestjs/testing';
import { ImpuestoController } from './impuesto.controller';

describe('ImpuestoController', () => {
  let controller: ImpuestoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImpuestoController],
    }).compile();

    controller = module.get<ImpuestoController>(ImpuestoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
