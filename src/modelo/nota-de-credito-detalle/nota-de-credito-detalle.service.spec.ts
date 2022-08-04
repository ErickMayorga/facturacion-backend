import { Test, TestingModule } from '@nestjs/testing';
import { NotaDeCreditoDetalleService } from './nota-de-credito-detalle.service';

describe('NotaDeCreditoDetalleService', () => {
  let service: NotaDeCreditoDetalleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotaDeCreditoDetalleService],
    }).compile();

    service = module.get<NotaDeCreditoDetalleService>(NotaDeCreditoDetalleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
