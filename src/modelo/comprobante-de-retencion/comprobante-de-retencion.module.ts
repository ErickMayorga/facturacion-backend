import { Module } from '@nestjs/common';
import { ComprobanteDeRetencionController } from './comprobante-de-retencion.controller';
import { ComprobanteDeRetencionService } from './comprobante-de-retencion.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {RetencionEntity} from "./dto/retencion.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([RetencionEntity])
  ],
  controllers: [ComprobanteDeRetencionController],
  providers: [ComprobanteDeRetencionService]
})
export class ComprobanteDeRetencionModule {}
