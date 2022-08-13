import { Module } from '@nestjs/common';
import { NotaDeCreditoDetalleController } from './nota-de-credito-detalle.controller';
import { NotaDeCreditoDetalleService } from './nota-de-credito-detalle.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {NotaCreditoDetalleEntity} from "./dto/nota-credito-detalle.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([NotaCreditoDetalleEntity])
  ],
  controllers: [NotaDeCreditoDetalleController],
  providers: [NotaDeCreditoDetalleService]
})
export class NotaDeCreditoDetalleModule {}
