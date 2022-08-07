import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import { DireccionController } from './direccion.controller';
import { DireccionService } from './direccion.service';
import {DireccionEntity} from "./dto/direccion.entity";

@Module(
    {
        imports:[
            TypeOrmModule.forFeature([DireccionEntity])
        ],
        controllers: [DireccionController],
        providers: [DireccionService],
    }
)
export class DireccionModule {}
