import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {CreateUsuarioDto} from "../usuario/dto/create-usuario.dto";
import {UpdateUsuarioDto} from "../usuario/dto/update-usuario.dto";
import {ApiTags} from "@nestjs/swagger";
import {TransportistaService} from "./transportista.service";
import {CreateTransportistaDto} from "./dto/create-transportista.dto";
import {UpdateTransportistaDto} from "./dto/update-transportista.dto";

@ApiTags('Transportistas')
@Controller('transportistas')
export class TransportistaController {
    constructor(private readonly transportistaService: TransportistaService) {}

    @Get()
    async getAll() {
        return await this.transportistaService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.transportistaService.getOne(id)
    }

    @Post()
    async create(@Body() dto: CreateTransportistaDto){
        return await this.transportistaService.create(dto)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number,
                 @Body() dto: UpdateTransportistaDto){
        return await this.transportistaService.update(id, dto)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.transportistaService.delete(id)
    }
}
