import { Module } from '@nestjs/common';
import { ImpuestoController } from './impuesto.controller';
import { ImpuestoService } from './impuesto.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ImpuestoEntity} from "./dto/impuesto.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([ImpuestoEntity])
  ],
  controllers: [ImpuestoController],
  providers: [ImpuestoService],
})
export class ImpuestoModule {}
