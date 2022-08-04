import { Module } from '@nestjs/common';
import { MetodoDePagoController } from './metodo-de-pago.controller';
import { MetodoDePagoService } from './metodo-de-pago.service';

@Module({
  controllers: [MetodoDePagoController],
  providers: [MetodoDePagoService]
})
export class MetodoDePagoModule {}
