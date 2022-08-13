import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {CreateFacturaPagoDto} from "../factura-pago/dto/create-factura-pago.dto";
import {UpdateFacturaPagoDto} from "../factura-pago/dto/update-factura-pago.dto";
import {ApiTags} from "@nestjs/swagger";
import {NotaDeDebitoPagoService} from "./nota-de-debito-pago.service";
import {CreateNotaDebitoPagoDto} from "./dto/create-nota-debito-pago.dto";
import {UpdateNotaDebitoPagoDto} from "./dto/update-nota-debito-pago.dto";

@ApiTags('Notas de débito detalle')
@Controller('nota-de-debito-pago')
export class NotaDeDebitoPagoController {
    constructor(private readonly notaDebitoPagoService: NotaDeDebitoPagoService) {}

    @Get()
    async getAll() {
        return await this.notaDebitoPagoService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.notaDebitoPagoService.getOne(id)
    }

    @Get('nota-de-debito/:idNotaDebito')
    async getPagos(@Param('idNotaDebito', ParseIntPipe) id: number){
        return await this.notaDebitoPagoService.getPagos(id)
    }

    @Post()
    async create(@Body() dto: CreateNotaDebitoPagoDto){
        return await this.notaDebitoPagoService.create(dto)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number,
                 @Body() dto: UpdateNotaDebitoPagoDto){
        return await this.notaDebitoPagoService.update(id, dto)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.notaDebitoPagoService.delete(id)
    }

    @Delete('nota-de-debito/:idNotaDebito')
    async deleteDetalle(@Param('idNotaDebito', ParseIntPipe) id: number){
        return await this.notaDebitoPagoService.deletePagos(id)
    }
}
