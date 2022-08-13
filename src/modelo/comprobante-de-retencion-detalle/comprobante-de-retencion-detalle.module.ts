import { Module } from '@nestjs/common';
import { ComprobanteDeRetencionDetalleController } from './comprobante-de-retencion-detalle.controller';
import { ComprobanteDeRetencionDetalleService } from './comprobante-de-retencion-detalle.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {RetencionDetalleEntity} from "./dto/retencion-detalle.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([RetencionDetalleEntity])
  ],
  controllers: [ComprobanteDeRetencionDetalleController],
  providers: [ComprobanteDeRetencionDetalleService]
})
export class ComprobanteDeRetencionDetalleModule {}
