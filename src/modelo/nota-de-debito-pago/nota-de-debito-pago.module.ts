import { Module } from '@nestjs/common';
import { NotaDeDebitoPagoController } from './nota-de-debito-pago.controller';
import { NotaDeDebitoPagoService } from './nota-de-debito-pago.service';

@Module({
  controllers: [NotaDeDebitoPagoController],
  providers: [NotaDeDebitoPagoService]
})
export class NotaDeDebitoPagoModule {}
