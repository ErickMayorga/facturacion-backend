import { Module } from '@nestjs/common';
import { MetodoDePagoController } from './metodo-de-pago.controller';
import { MetodoDePagoService } from './metodo-de-pago.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {MetodoPagoEntity} from "./dto/metodo-pago.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([MetodoPagoEntity])
  ],
  controllers: [MetodoDePagoController],
  providers: [MetodoDePagoService]
})
export class MetodoDePagoModule {}
