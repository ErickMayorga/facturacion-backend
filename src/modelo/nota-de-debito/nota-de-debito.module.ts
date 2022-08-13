import { Module } from '@nestjs/common';
import { NotaDeDebitoController } from './nota-de-debito.controller';
import { NotaDeDebitoService } from './nota-de-debito.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {NotaDebitoEntity} from "./dto/nota-debito.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([NotaDebitoEntity])
  ],
  controllers: [NotaDeDebitoController],
  providers: [NotaDeDebitoService]
})
export class NotaDeDebitoModule {}
