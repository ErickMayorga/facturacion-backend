import { Module } from '@nestjs/common';
import { FacturaPagoController } from './factura-pago.controller';
import { FacturaPagoService } from './factura-pago.service';

@Module({
  controllers: [FacturaPagoController],
  providers: [FacturaPagoService]
})
export class FacturaPagoModule {}
