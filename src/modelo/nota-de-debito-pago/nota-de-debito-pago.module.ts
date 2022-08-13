import { Module } from '@nestjs/common';
import { NotaDeDebitoPagoController } from './nota-de-debito-pago.controller';
import { NotaDeDebitoPagoService } from './nota-de-debito-pago.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {NotaDebitoPagoEntity} from "./dto/nota-debito-pago.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([NotaDebitoPagoEntity])
  ],
  controllers: [NotaDeDebitoPagoController],
  providers: [NotaDeDebitoPagoService]
})
export class NotaDeDebitoPagoModule {}
