import { Module } from '@nestjs/common';
import { EmpresaController } from './empresa.controller';
import { EmpresaService } from './empresa.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {EmpresaEntity} from "./dto/empresa.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([EmpresaEntity])
  ],
  controllers: [EmpresaController],
  providers: [EmpresaService]
})
export class EmpresaModule {}
