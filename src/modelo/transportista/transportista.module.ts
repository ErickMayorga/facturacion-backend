import { Module } from '@nestjs/common';
import { TransportistaController } from './transportista.controller';
import { TransportistaService } from './transportista.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TransportistaEntity} from "./dto/transportista.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([TransportistaEntity])
  ],
  controllers: [TransportistaController],
  providers: [TransportistaService]
})
export class TransportistaModule {}
