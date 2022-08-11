import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ProductoEntity} from "./dto/producto.entity";
import {CreateProductoDto} from "./dto/create-producto.dto";
import {UpdateProductoDto} from "./dto/update-producto.dto";

@Injectable()
export class ProductoService {
    constructor(@InjectRepository(ProductoEntity)
                private productoRepository: Repository<ProductoEntity>) {
    }

    async getAll() {
        return await this.productoRepository.find()
    }

    async getProductos(idUsuario: number){
        return this.productoRepository
            .createQueryBuilder('producto')
            .where("producto.id_usuario = :id", { id: idUsuario })
            .getMany()
    }

    async getOne(id: number){
        const object = await this.productoRepository.findOne({where: {id_producto: id}})
        if(!object) throw new NotFoundException()
        return object
    }

    async create(dto: CreateProductoDto){
        const object = this.productoRepository.create(dto as any)
        return await this.productoRepository.save(object)
    }

    async update(id: number, dto: UpdateProductoDto){
        const object = await this.productoRepository.findOne({where: {id_producto: id}})
        if(!object) throw new NotFoundException('Producto no existe')

        const updatedObject = Object.assign(object, dto)
        return await this.productoRepository.save(updatedObject)
    }

    async delete(id: number){
        return await this.productoRepository.delete(id)
    }
}
