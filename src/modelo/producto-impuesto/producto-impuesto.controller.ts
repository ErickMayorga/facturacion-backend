import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {ProductoImpuestoService} from "./producto-impuesto.service";
import {CreateProductoImpuestoDto} from "./dto/create-producto-impuesto.dto";
import {UpdateProductoImpuestoDto} from "./dto/update-producto-impuesto.dto";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Producto-Impuesto')
@Controller('producto-impuesto')
export class ProductoImpuestoController {
    constructor(private readonly productoImpuestoService: ProductoImpuestoService) {}

    @Get()
    async getAll() {
        return await this.productoImpuestoService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.productoImpuestoService.getOne(id)
    }
    @Get('producto/:idProducto')
    async getImpuestos(@Param('idProducto', ParseIntPipe) id: number){
        return await this.productoImpuestoService.getImpuestos(id)
    }

    @Post()
    async create(@Body() dto: CreateProductoImpuestoDto){
        return await this.productoImpuestoService.create(dto)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number,
                 @Body() dto: UpdateProductoImpuestoDto){
        return await this.productoImpuestoService.update(id, dto)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.productoImpuestoService.delete(id)
    }

    @Delete('producto/:idProducto')
    async deleteImpuestos(@Param('idProducto', ParseIntPipe) id: number){
        return await this.productoImpuestoService.deleteImpuestos(id)
    }
}
