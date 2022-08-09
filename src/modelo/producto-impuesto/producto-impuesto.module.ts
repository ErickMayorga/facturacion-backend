import { Module } from '@nestjs/common';
import { ProductoImpuestoController } from './producto-impuesto.controller';
import { ProductoImpuestoService } from './producto-impuesto.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProductoImpuestoEntity} from "./dto/producto-impuesto.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([ProductoImpuestoEntity]),
  ],
  controllers: [ProductoImpuestoController],
  providers: [ProductoImpuestoService]
})
export class ProductoImpuestoModule {}
