import { Test, TestingModule } from '@nestjs/testing';
import { NotaDeDebitoDetalleController } from './nota-de-debito-detalle.controller';

describe('NotaDeDebitoDetalleController', () => {
  let controller: NotaDeDebitoDetalleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotaDeDebitoDetalleController],
    }).compile();

    controller = module.get<NotaDeDebitoDetalleController>(NotaDeDebitoDetalleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
