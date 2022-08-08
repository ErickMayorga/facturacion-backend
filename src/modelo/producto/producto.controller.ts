import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {ProductoService} from "./producto.service";
import {CreateProductoDto} from "./dto/create-producto.dto";
import {UpdateProductoDto} from "./dto/update-producto.dto";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Productos')
@Controller('productos')
export class ProductoController {
    constructor(private readonly productoService: ProductoService) {}

    @Get()
    async getAll() {
        return await this.productoService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.productoService.getOne(id)
    }

    @Post()
    async create(@Body() dto: CreateProductoDto){
        return await this.productoService.create(dto)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number,
                 @Body() dto: UpdateProductoDto){
        return await this.productoService.update(id, dto)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.productoService.delete(id)
    }
}
