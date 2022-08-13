import { Module } from '@nestjs/common';
import { NotaDeDebitoDetalleController } from './nota-de-debito-detalle.controller';
import { NotaDeDebitoDetalleService } from './nota-de-debito-detalle.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {NotaDebitoDetalleEntity} from "./dto/nota-debito-detalle.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([NotaDebitoDetalleEntity])
  ],
  controllers: [NotaDeDebitoDetalleController],
  providers: [NotaDeDebitoDetalleService]
})
export class NotaDeDebitoDetalleModule {}
