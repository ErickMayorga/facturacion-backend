import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {DestinatarioService} from "./destinatario.service";
import {CreateDestinatarioDto} from "./dto/create-destinatario.dto";
import {UpdateDestinatarioDto} from "./dto/update-destinatario.dto";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Destinatarios')
@Controller('destinatarios')
export class DestinatarioController {
    constructor(private readonly destinatarioService: DestinatarioService) {}

    @Get()
    async getAll() {
        return await this.destinatarioService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.destinatarioService.getOne(id)
    }

    @Get('comprobante/:idComprobante')
    async getDestinatarios(@Param('idComprobante', ParseIntPipe) id: number){
        return await this.destinatarioService.getDestinatarios(id)
    }

    @Post()
    async create(@Body() dto: CreateDestinatarioDto){
        return await this.destinatarioService.create(dto)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number,
                 @Body() dto: UpdateDestinatarioDto){
        return await this.destinatarioService.update(id, dto)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.destinatarioService.delete(id)
    }

    @Delete('comprobante/:idComprobante')
    async deleteDetalle(@Param('idComprobante', ParseIntPipe) id: number){
        return await this.destinatarioService.deleteDestinatarios(id)
    }
}
