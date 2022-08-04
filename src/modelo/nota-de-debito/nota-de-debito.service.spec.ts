import { Test, TestingModule } from '@nestjs/testing';
import { NotaDeDebitoService } from './nota-de-debito.service';

describe('NotaDeDebitoService', () => {
  let service: NotaDeDebitoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotaDeDebitoService],
    }).compile();

    service = module.get<NotaDeDebitoService>(NotaDeDebitoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
