import { Module } from '@nestjs/common';
import { DestinatarioController } from './destinatario.controller';
import { DestinatarioService } from './destinatario.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DestinatarioEntity} from "./dto/destinatario.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([DestinatarioEntity])
  ],
  controllers: [DestinatarioController],
  providers: [DestinatarioService]
})
export class DestinatarioModule {}
