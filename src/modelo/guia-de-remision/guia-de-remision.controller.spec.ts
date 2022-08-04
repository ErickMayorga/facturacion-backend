import { Test, TestingModule } from '@nestjs/testing';
import { GuiaDeRemisionController } from './guia-de-remision.controller';

describe('GuiaDeRemisionController', () => {
  let controller: GuiaDeRemisionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuiaDeRemisionController],
    }).compile();

    controller = module.get<GuiaDeRemisionController>(GuiaDeRemisionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
