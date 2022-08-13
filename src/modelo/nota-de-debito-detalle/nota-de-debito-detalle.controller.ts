import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {CreateNotaCreditoDetalleDto} from "../nota-de-credito-detalle/dto/create-nota-credito-detalle.dto";
import {UpdateNotaCreditoDetalleDto} from "../nota-de-credito-detalle/dto/update-nota-credito-detalle.dto";
import {NotaDeDebitoDetalleService} from "./nota-de-debito-detalle.service";
import {CreateNotaDebitoDetalleDto} from "./dto/create-nota-debito-detalle.dto";
import {UpdateNotaDebitoDetalleDto} from "./dto/update-nota-debito-detalle.dto";

@Controller('nota-de-debito-detalle')
export class NotaDeDebitoDetalleController {
    constructor(private readonly notaDebitoDetalleService: NotaDeDebitoDetalleService) {}

    @Get()
    async getAll() {
        return await this.notaDebitoDetalleService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.notaDebitoDetalleService.getOne(id)
    }

    @Get('comprobante/:idComprobante')
    async getDetalle(@Param('idComprobante', ParseIntPipe) id: number){
        return await this.notaDebitoDetalleService.getDetalle(id)
    }

    @Post()
    async create(@Body() dto: CreateNotaDebitoDetalleDto){
        return await this.notaDebitoDetalleService.create(dto)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number,
                 @Body() dto: UpdateNotaDebitoDetalleDto){
        return await this.notaDebitoDetalleService.update(id, dto)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.notaDebitoDetalleService.delete(id)
    }

    @Delete('comprobante/:idComprobante')
    async deleteDetalle(@Param('idComprobante', ParseIntPipe) id: number){
        return await this.notaDebitoDetalleService.deleteDetalle(id)
    }
}
