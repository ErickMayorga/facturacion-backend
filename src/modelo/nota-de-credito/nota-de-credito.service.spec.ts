import { Test, TestingModule } from '@nestjs/testing';
import { NotaDeCreditoService } from './nota-de-credito.service';

describe('NotaDeCreditoService', () => {
  let service: NotaDeCreditoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotaDeCreditoService],
    }).compile();

    service = module.get<NotaDeCreditoService>(NotaDeCreditoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
