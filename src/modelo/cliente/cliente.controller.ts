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

    @Get('usuario/:idUsuario')
    async getClientes(@Param('idUsuario', ParseIntPipe) id: number){
        return await this.clienteService.getClientes(id)
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.clienteService.getOne(id)
    }

    @Get('cedula/:idUsuario/:cedula')
    async getCliente(@Param('idUsuario', ParseIntPipe) id: number, @Param('cedula') cedula: string){
        return await this.clienteService.getCliente(id,cedula)
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
