import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {GuiaDeRemisionService} from "./guia-de-remision.service";
import {CreateGuiaRemisionDto} from "./dto/create-guia-remision.dto";
import {UpdateGuiaRemisionDto} from "./dto/update-guia-remision.dto";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Guías de Remisión')
@Controller('guia-de-remision')
export class GuiaDeRemisionController {
    constructor(private readonly guiaRemisionService: GuiaDeRemisionService) {}

    @Get()
    async getAll() {
        return await this.guiaRemisionService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.guiaRemisionService.getOne(id)
    }

    @Get('empresa/:idEmpresa')
    async getRetenciones(@Param('idEmpresa', ParseIntPipe) id: number){
        return await this.guiaRemisionService.getRetenciones(id)
    }

    @Post()
    async create(@Body() dto: CreateGuiaRemisionDto){
        return await this.guiaRemisionService.create(dto)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number,
                 @Body() dto: UpdateGuiaRemisionDto){
        return await this.guiaRemisionService.update(id, dto)
    }

    @Delete('/deshabilitar/:id')
    async deshabilitar(@Param('id', ParseIntPipe) id: number){
        return await this.guiaRemisionService.deshabilitarComprobante(id)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.guiaRemisionService.delete(id)
    }
}
