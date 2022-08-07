import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {ClienteService} from "./cliente.service";
import {CreateClienteDto} from "./dto/create-cliente.dto";
import {UpdateClienteDto} from "./dto/update-cliente.dto";

@ApiTags('Clientes')
@Controller('clientes')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) {}

    @Get()
    async getAll() {
        return await this.clienteService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.clienteService.getOne(id)
    }

    @Post()
    async create(@Body() dto: CreateClienteDto){
        return await this.clienteService.create(dto)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number,
                 @Body() dto: UpdateClienteDto){
        return await this.clienteService.update(id, dto)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.clienteService.delete(id)
    }
}
