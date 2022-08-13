import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {ComprobanteDeRetencionService} from "./comprobante-de-retencion.service";
import {CreateRetencionDto} from "./dto/create-retencion.dto";
import {UpdateRetencionDto} from "./dto/update-retencion.dto";

@ApiTags('Retenciones')
@Controller('retenciones')
export class ComprobanteDeRetencionController {
    constructor(private readonly retencionService: ComprobanteDeRetencionService) {}

    @Get()
    async getAll() {
        return await this.retencionService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.retencionService.getOne(id)
    }

    @Get('empresa/:idEmpresa')
    async getComprobantes(@Param('idEmpresa', ParseIntPipe) id: number){
        return await this.retencionService.getComprobantes(id)
    }

    @Get('factura/:idFactura')
    async getComprobantesPorFactura(@Param('idFactura', ParseIntPipe) id: number){
        return await this.retencionService.getComprobantesPorFactura(id)
    }

    @Post()
    async create(@Body() dto: CreateRetencionDto){
        return await this.retencionService.create(dto)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number,
                 @Body() dto: UpdateRetencionDto){
        return await this.retencionService.update(id, dto)
    }

    @Delete('/deshabilitar/:id')
    async deshabilitar(@Param('id', ParseIntPipe) id: number){
        return await this.retencionService.deshabilitarComprobante(id)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.retencionService.delete(id)
    }
}
