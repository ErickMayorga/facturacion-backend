import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {NotaDeCreditoDetalleService} from "./nota-de-credito-detalle.service";
import {CreateNotaCreditoDetalleDto} from "./dto/create-nota-credito-detalle.dto";
import {UpdateNotaCreditoDetalleDto} from "./dto/update-nota-credito-detalle.dto";

@ApiTags('Notas de Crédito Detalle')
@Controller('nota-de-credito-detalle')
export class NotaDeCreditoDetalleController {
    constructor(private readonly notaCreditoDetalleService: NotaDeCreditoDetalleService) {}

    @Get()
    async getAll() {
        return await this.notaCreditoDetalleService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.notaCreditoDetalleService.getOne(id)
    }

    @Get('comprobante/:idComprobante')
    async getDetalle(@Param('idComprobante', ParseIntPipe) id: number){
        return await this.notaCreditoDetalleService.getDetalle(id)
    }

    @Post()
    async create(@Body() dto: CreateNotaCreditoDetalleDto){
        return await this.notaCreditoDetalleService.create(dto)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number,
                 @Body() dto: UpdateNotaCreditoDetalleDto){
        return await this.notaCreditoDetalleService.update(id, dto)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.notaCreditoDetalleService.delete(id)
    }

    @Delete('comprobante/:idComprobante')
    async deleteDetalle(@Param('idComprobante', ParseIntPipe) id: number){
        return await this.notaCreditoDetalleService.deleteDetalle(id)
    }
}
