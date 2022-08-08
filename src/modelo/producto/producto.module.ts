import { Module } from '@nestjs/common';
import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProductoEntity} from "./dto/producto.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([ProductoEntity])
  ],
  controllers: [ProductoController],
  providers: [ProductoService]
})
export class ProductoModule {}
