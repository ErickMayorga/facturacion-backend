import { Test, TestingModule } from '@nestjs/testing';
import { NotaDeDebitoController } from './nota-de-debito.controller';

describe('NotaDeDebitoController', () => {
  let controller: NotaDeDebitoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotaDeDebitoController],
    }).compile();

    controller = module.get<NotaDeDebitoController>(NotaDeDebitoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
