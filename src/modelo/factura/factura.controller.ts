import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {FacturaService} from "./factura.service";
import {CreateFacturaDto} from "./dto/create-factura.dto";
import {UpdateFacturaDto} from "./dto/update-factura.dto";

@ApiTags('Facturas')
@Controller('facturas')
export class FacturaController {
    constructor(private readonly facturaService: FacturaService) {}

    @Get()
    async getAll() {
        return await this.facturaService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.facturaService.getOne(id)
    }

    @Get('empresa/:idEmpresa')
    async getFacturas(@Param('idEmpresa', ParseIntPipe) id: number){
        return await this.facturaService.getFacturas(id)
    }

    @Get('cliente/:idEmpresa/:idCliente')
    async getFacturasPorCliente(@Param('idEmpresa', ParseIntPipe) idEmpresa: number,
                                @Param('idCliente', ParseIntPipe) idCliente: number){
        return await this.facturaService.getFacturasPorCliente(idEmpresa, idCliente)
    }

    @Post()
    async create(@Body() dto: CreateFacturaDto){
        return await this.facturaService.create(dto)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number,
                 @Body() dto: UpdateFacturaDto){
        return await this.facturaService.update(id, dto)
    }

    @Delete('/deshabilitar/:id')
    async deshabilitar(@Param('id', ParseIntPipe) id: number){
        return await this.facturaService.deshabilitarComprobante(id)
    }

    @Put('/guia-remision/:idFactura')
    async asignarGuiaRemision(@Param('idFactura', ParseIntPipe) idFactura: number,
                              @Body() guiaRemision: string){
        return await this.facturaService.asignarGuiaRemision(idFactura, guiaRemision)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.facturaService.delete(id)
    }
}
