import { Test, TestingModule } from '@nestjs/testing';
import { NotaDeDebitoPagoController } from './nota-de-debito-pago.controller';

describe('NotaDeDebitoPagoController', () => {
  let controller: NotaDeDebitoPagoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotaDeDebitoPagoController],
    }).compile();

    controller = module.get<NotaDeDebitoPagoController>(NotaDeDebitoPagoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
