import { Module } from '@nestjs/common';
import { FacturaController } from './factura.controller';
import { FacturaService } from './factura.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {FacturaEntity} from "./dto/factura.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([FacturaEntity])
  ],
  controllers: [FacturaController],
  providers: [FacturaService]
})
export class FacturaModule {}
