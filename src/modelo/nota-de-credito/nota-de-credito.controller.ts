import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {NotaDeCreditoService} from "./nota-de-credito.service";
import {CreateNotaCreditoDto} from "./dto/create-nota-credito.dto";
import {UpdateNotaCreditoDto} from "./dto/update-nota-credito.dto";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Notas de crédito')
@Controller('nota-de-credito')
export class NotaDeCreditoController {
    constructor(private readonly notaCreditoService: NotaDeCreditoService) {}

    @Get()
    async getAll() {
        return await this.notaCreditoService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.notaCreditoService.getOne(id)
    }

    @Get('empresa/:idEmpresa')
    async getComprobantes(@Param('idEmpresa', ParseIntPipe) id: number){
        return await this.notaCreditoService.getComprobantes(id)
    }

    @Get('factura/:idFactura')
    async getComprobantesPorFactura(@Param('idFactura', ParseIntPipe) id: number){
        return await this.notaCreditoService.getComprobantesPorFactura(id)
    }

    @Post()
    async create(@Body() dto: CreateNotaCreditoDto){
        return await this.notaCreditoService.create(dto)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number,
                 @Body() dto: UpdateNotaCreditoDto){
        return await this.notaCreditoService.update(id, dto)
    }

    @Delete('/deshabilitar/:id')
    async deshabilitar(@Param('id', ParseIntPipe) id: number){
        return await this.notaCreditoService.deshabilitarComprobante(id)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.notaCreditoService.delete(id)
    }
}
