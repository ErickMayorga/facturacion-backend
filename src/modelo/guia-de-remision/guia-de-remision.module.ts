import { Module } from '@nestjs/common';
import { GuiaDeRemisionController } from './guia-de-remision.controller';
import { GuiaDeRemisionService } from './guia-de-remision.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {GuiaRemisionEntity} from "./dto/guia-remision.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([GuiaRemisionEntity])
  ],
  controllers: [GuiaDeRemisionController],
  providers: [GuiaDeRemisionService]
})
export class GuiaDeRemisionModule {}
