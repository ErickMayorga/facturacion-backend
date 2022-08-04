import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {EmpresaService} from "./empresa.service";
import {CreateEmpresaDto} from "./dto/create-empresa.dto";
import {UpdateEmpresaDto} from "./dto/update-empresa.dto";

@ApiTags('Empresas')
@Controller('empresas')
export class EmpresaController {
    constructor(private readonly empresaService: EmpresaService) {}

    @Get()
    async getAll() {
        return await this.empresaService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.empresaService.getOne(id)
    }

    @Post()
    async create(@Body() dto: CreateEmpresaDto){
        return await this.empresaService.create(dto)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number,
                 @Body() dto: UpdateEmpresaDto){
        return await this.empresaService.update(id, dto)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.empresaService.delete(id)
    }
}
