import { Module } from '@nestjs/common';
import { FacturaDetalleController } from './factura-detalle.controller';
import { FacturaDetalleService } from './factura-detalle.service';

@Module({
  controllers: [FacturaDetalleController],
  providers: [FacturaDetalleService]
})
export class FacturaDetalleModule {}
