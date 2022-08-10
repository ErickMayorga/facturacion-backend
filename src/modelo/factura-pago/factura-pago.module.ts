import { Module } from '@nestjs/common';
import { FacturaPagoController } from './factura-pago.controller';
import { FacturaPagoService } from './factura-pago.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {FacturaPagoEntity} from "./dto/factura-pago.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([FacturaPagoEntity])
  ],
  controllers: [FacturaPagoController],
  providers: [FacturaPagoService]
})
export class FacturaPagoModule {}
