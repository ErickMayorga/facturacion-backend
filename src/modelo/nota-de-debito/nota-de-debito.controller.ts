import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {NotaDeDebitoService} from "./nota-de-debito.service";
import {CreateNotaDebitoDto} from "./dto/create-nota-debito.dto";
import {UpdateNotaDebitoDto} from "./dto/update-nota-debito.dto";

@ApiTags('Notas de débito')
@Controller('nota-de-debito')
export class NotaDeDebitoController {
    constructor(private readonly notaDebitoService: NotaDeDebitoService) {}

    @Get()
    async getAll() {
        return await this.notaDebitoService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.notaDebitoService.getOne(id)
    }

    @Get('empresa/:idEmpresa')
    async getComprobantes(@Param('idEmpresa', ParseIntPipe) id: number){
        return await this.notaDebitoService.getComprobantes(id)
    }

    @Get('factura/:idFactura')
    async getComprobantesPorFactura(@Param('idFactura', ParseIntPipe) id: number){
        return await this.notaDebitoService.getComprobantesPorFactura(id)
    }

    @Post()
    async create(@Body() dto: CreateNotaDebitoDto){
        return await this.notaDebitoService.create(dto)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number,
                 @Body() dto: UpdateNotaDebitoDto){
        return await this.notaDebitoService.update(id, dto)
    }

    @Delete('/deshabilitar/:id')
    async deshabilitar(@Param('id', ParseIntPipe) id: number){
        return await this.notaDebitoService.deshabilitarComprobante(id)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.notaDebitoService.delete(id)
    }
}
