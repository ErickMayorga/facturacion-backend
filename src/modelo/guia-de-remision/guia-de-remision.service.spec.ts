import { Test, TestingModule } from '@nestjs/testing';
import { GuiaDeRemisionService } from './guia-de-remision.service';

describe('GuiaDeRemisionService', () => {
  let service: GuiaDeRemisionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuiaDeRemisionService],
    }).compile();

    service = module.get<GuiaDeRemisionService>(GuiaDeRemisionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
