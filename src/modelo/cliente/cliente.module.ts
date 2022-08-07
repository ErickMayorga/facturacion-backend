import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ClienteEntity} from "./dto/cliente.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([ClienteEntity])
  ],
  controllers: [ClienteController],
  providers: [ClienteService]
})
export class ClienteModule {}
