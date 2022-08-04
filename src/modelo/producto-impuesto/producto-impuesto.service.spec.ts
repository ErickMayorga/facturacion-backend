import { Test, TestingModule } from '@nestjs/testing';
import { ProductoImpuestoService } from './producto-impuesto.service';

describe('ProductoImpuestoService', () => {
  let service: ProductoImpuestoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductoImpuestoService],
    }).compile();

    service = module.get<ProductoImpuestoService>(ProductoImpuestoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
