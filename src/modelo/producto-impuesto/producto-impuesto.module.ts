import { Module } from '@nestjs/common';
import { ProductoImpuestoController } from './producto-impuesto.controller';
import { ProductoImpuestoService } from './producto-impuesto.service';

@Module({
  controllers: [ProductoImpuestoController],
  providers: [ProductoImpuestoService]
})
export class ProductoImpuestoModule {}
