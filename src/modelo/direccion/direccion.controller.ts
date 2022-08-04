import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {UsuarioService} from "../usuario/usuario.service";
import {CreateUsuarioDto} from "../usuario/dto/create-usuario.dto";
import {UpdateUsuarioDto} from "../usuario/dto/update-usuario.dto";
import {DireccionService} from "./direccion.service";
import {CreateDireccionDto} from "./dto/create-direccion.dto";
import {UpdateDireccionDto} from "./dto/update-direccion.dto";

@ApiTags('Direcciones')
@Controller('direcciones')
export class DireccionController {
    constructor(private readonly direccionService: DireccionService) {}

    @Get()
    async getAll() {
        return await this.direccionService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.direccionService.getOne(id)
    }

    @Post()
    async create(@Body() dto: CreateDireccionDto){
        return await this.direccionService.create(dto)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number,
                 @Body() dto: UpdateDireccionDto){
        return await this.direccionService.update(id, dto)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.direccionService.delete(id)
    }
}
