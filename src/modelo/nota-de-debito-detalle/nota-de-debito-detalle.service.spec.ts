import { Test, TestingModule } from '@nestjs/testing';
import { NotaDeDebitoDetalleService } from './nota-de-debito-detalle.service';

describe('NotaDeDebitoDetalleService', () => {
  let service: NotaDeDebitoDetalleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotaDeDebitoDetalleService],
    }).compile();

    service = module.get<NotaDeDebitoDetalleService>(NotaDeDebitoDetalleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
