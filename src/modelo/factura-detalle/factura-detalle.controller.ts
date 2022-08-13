import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {FacturaDetalleService} from "./factura-detalle.service";
import {CreateFacturaDetalleDto} from "./dto/create-factura-detalle.dto";
import {UpdateFacturaDetalleDto} from "./dto/update-factura-detalle.dto";

@ApiTags('Factura-Detalle')
@Controller('factura-detalle')
export class FacturaDetalleController {
    constructor(private readonly facturaDetalleService: FacturaDetalleService) {}

    @Get()
    async getAll() {
        return await this.facturaDetalleService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.facturaDetalleService.getOne(id)
    }

    @Get('comprobante/:idComprobante')
    async getDetalle(@Param('idComprobante', ParseIntPipe) id: number){
        return await this.facturaDetalleService.getDetalle(id)
    }

    @Post()
    async create(@Body() dto: CreateFacturaDetalleDto){
        return await this.facturaDetalleService.create(dto)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number,
                 @Body() dto: UpdateFacturaDetalleDto){
        return await this.facturaDetalleService.update(id, dto)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.facturaDetalleService.delete(id)
    }

    @Delete('comprobante/:idComprobante')
    async deleteDetalle(@Param('idComprobante', ParseIntPipe) id: number){
        return await this.facturaDetalleService.deleteDetalle(id)
    }
}
