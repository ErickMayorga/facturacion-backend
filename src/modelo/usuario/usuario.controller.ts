import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {UsuarioService} from "./usuario.service";
import {CreateUsuarioDto} from "./dto/create-usuario.dto";
import {UpdateUsuarioDto} from "./dto/update-usuario.dto";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Usuarios')
@Controller('usuarios')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Get()
    async getAll() {
        return await this.usuarioService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.usuarioService.getOne(id)
    }

    @Post()
    async create(@Body() dto: CreateUsuarioDto){
        return await this.usuarioService.create(dto)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number,
           @Body() dto: UpdateUsuarioDto){
        return await this.usuarioService.update(id, dto)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.usuarioService.delete(id)
    }

}
