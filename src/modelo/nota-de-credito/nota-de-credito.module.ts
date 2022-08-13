import { Module } from '@nestjs/common';
import { NotaDeCreditoController } from './nota-de-credito.controller';
import { NotaDeCreditoService } from './nota-de-credito.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {NotaCreditoEntity} from "./dto/nota-credito.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([NotaCreditoEntity])
  ],
  controllers: [NotaDeCreditoController],
  providers: [NotaDeCreditoService]
})
export class NotaDeCreditoModule {}
