import { Module } from '@nestjs/common';
import { FacturaDetalleController } from './factura-detalle.controller';
import { FacturaDetalleService } from './factura-detalle.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {FacturaDetalleEntity} from "./dto/factura-detalle.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([FacturaDetalleEntity])
  ],
  controllers: [FacturaDetalleController],
  providers: [FacturaDetalleService]
})
export class FacturaDetalleModule {}
