import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {ComprobanteDeRetencionDetalleService} from "./comprobante-de-retencion-detalle.service";
import {CreateRetencionDetalleDto} from "./dto/create-retencion-detalle.dto";
import {UpdateRetencionDetalleDto} from "./dto/update-retencion-detalle.dto";

@ApiTags('Retención Detalle')
@Controller('retencion-detalle')
export class ComprobanteDeRetencionDetalleController {
    constructor(private readonly retencionDetalleService: ComprobanteDeRetencionDetalleService) {}

    @Get()
    async getAll() {
        return await this.retencionDetalleService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.retencionDetalleService.getOne(id)
    }

    @Get('comprobante/:idComprobante')
    async getDetalle(@Param('idComprobante', ParseIntPipe) id: number){
        return await this.retencionDetalleService.getDetalle(id)
    }

    @Post()
    async create(@Body() dto: CreateRetencionDetalleDto){
        return await this.retencionDetalleService.create(dto)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number,
                 @Body() dto: UpdateRetencionDetalleDto){
        return await this.retencionDetalleService.update(id, dto)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.retencionDetalleService.delete(id)
    }

    @Delete('comprobante/:idComprobante')
    async deleteDetalle(@Param('idComprobante', ParseIntPipe) id: number){
        return await this.retencionDetalleService.deleteDetalle(id)
    }
}
