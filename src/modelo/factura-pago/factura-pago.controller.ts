import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {FacturaPagoService} from "./factura-pago.service";
import {CreateFacturaPagoDto} from "./dto/create-factura-pago.dto";
import {UpdateFacturaPagoDto} from "./dto/update-factura-pago.dto";

@ApiTags('Factura-Pago')
@Controller('factura-pago')
export class FacturaPagoController {
    constructor(private readonly facturaPagoService: FacturaPagoService) {}

    @Get()
    async getAll() {
        return await this.facturaPagoService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.facturaPagoService.getOne(id)
    }

    @Get('factura/:idFactura')
    async getDetalle(@Param('idFactura', ParseIntPipe) id: number){
        return await this.facturaPagoService.getPagos(id)
    }

    @Post()
    async create(@Body() dto: CreateFacturaPagoDto){
        return await this.facturaPagoService.create(dto)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number,
                 @Body() dto: UpdateFacturaPagoDto){
        return await this.facturaPagoService.update(id, dto)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.facturaPagoService.delete(id)
    }

    @Delete('factura/:idFactura')
    async deleteDetalle(@Param('idFactura', ParseIntPipe) id: number){
        return await this.facturaPagoService.deletePagos(id)
    }
}
