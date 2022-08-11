import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
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

    @Get('usuario/:idUsuario')
    async getTransportistas(@Param('idUsuario', ParseIntPipe) id: number){
        return await this.transportistaService.getTransportistas(id)
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.transportistaService.getOne(id)
    }

    @Get('cedula/:idUsuario/:cedula')
    async getTransportista(@Param('idUsuario', ParseIntPipe) id: number, @Param('cedula') cedula: string){
        return await this.transportistaService.getTransportista(id,cedula)
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
