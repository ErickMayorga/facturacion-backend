import { Test, TestingModule } from '@nestjs/testing';
import { NotaDeCreditoController } from './nota-de-credito.controller';

describe('NotaDeCreditoController', () => {
  let controller: NotaDeCreditoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotaDeCreditoController],
    }).compile();

    controller = module.get<NotaDeCreditoController>(NotaDeCreditoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
