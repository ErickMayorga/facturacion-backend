import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {UsuarioService} from "./usuario.service";
import {CreateUsuarioDto} from "./dto/create-usuario.dto";
import {UpdateUsuarioDto} from "./dto/update-usuario.dto";

@Controller('usuarios')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Get()
    async getAll() {
        return await this.usuarioService.getAll()
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number){
        return this.usuarioService.getOne(id)
    }

    @Post()
    create(@Body() dto: CreateUsuarioDto){

    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number,
           @Body() dto: UpdateUsuarioDto){
        return this.usuarioService.update(id, dto)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number){
        return this.usuarioService.delete(id)
    }

}
