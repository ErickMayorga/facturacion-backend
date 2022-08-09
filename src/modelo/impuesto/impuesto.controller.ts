import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {ImpuestoService} from "./impuesto.service";
import {CreateImpuestoDto} from "./dto/create-impuesto.dto";
import {UpdateImpuestoDto} from "./dto/update-impuesto.dto";

@ApiTags('Impuestos')
@Controller('impuestos')
export class ImpuestoController {
    constructor(private readonly impuestoService: ImpuestoService) {}

    @Get()
    async getAll() {
        return await this.impuestoService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.impuestoService.getOne(id)
    }

    @Get('categoria/:cat')
    async getImpuestos(@Param('cat') categoria: string){
        return await this.impuestoService.getImpuestos(categoria)
    }

    @Post()
    async create(@Body() dto: CreateImpuestoDto){
        return await this.impuestoService.create(dto)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number,
                 @Body() dto: UpdateImpuestoDto){
        return await this.impuestoService.update(id, dto)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.impuestoService.delete(id)
    }
}
