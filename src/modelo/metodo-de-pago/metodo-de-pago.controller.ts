import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {MetodoDePagoService} from "./metodo-de-pago.service";
import {CreateMetodoPagoDto} from "./dto/create-metodo-pago.dto";
import {UpdateMetodoPagoDto} from "./dto/update-metodo-pago.dto";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Método-Pago')
@Controller('metodo-pago')
export class MetodoDePagoController {
    constructor(private readonly metodoPagoService: MetodoDePagoService) {}

    @Get()
    async getAll() {
        return await this.metodoPagoService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.metodoPagoService.getOne(id)
    }

    @Post()
    async create(@Body() dto: CreateMetodoPagoDto){
        return await this.metodoPagoService.create(dto)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number,
                 @Body() dto: UpdateMetodoPagoDto){
        return await this.metodoPagoService.update(id, dto)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.metodoPagoService.delete(id)
    }
}
