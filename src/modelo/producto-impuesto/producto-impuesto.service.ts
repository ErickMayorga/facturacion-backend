import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ProductoImpuestoEntity} from "./dto/producto-impuesto.entity";
import {CreateProductoImpuestoDto} from "./dto/create-producto-impuesto.dto";
import {UpdateProductoImpuestoDto} from "./dto/update-producto-impuesto.dto";
import {ImpuestoService} from "../impuesto/impuesto.service";

@Injectable()
export class ProductoImpuestoService {
    constructor(@InjectRepository(ProductoImpuestoEntity)
                private productoImpuestoRepository: Repository<ProductoImpuestoEntity>) {
    }

    async getAll() {
        return await this.productoImpuestoRepository.find()
    }

    async getOne(id: number){
        const object = await this.productoImpuestoRepository.findOne({where: {id_producto_impuesto: id}})
        if(!object) throw new NotFoundException()
        return object
    }

    async getImpuestos(idProducto: number){
        return await this.productoImpuestoRepository
            .createQueryBuilder('producto_impuesto')
            .where("producto_impuesto.id_producto = :id", { id: idProducto })
            .getMany()
    }

    async create(dto: CreateProductoImpuestoDto){
        const object = this.productoImpuestoRepository.create(dto as any)
        return await this.productoImpuestoRepository.save(object)
    }

    async update(id: number, dto: UpdateProductoImpuestoDto){
        const object = await this.productoImpuestoRepository.findOne({where: {id_producto_impuesto: id}})
        if(!object) throw new NotFoundException('Impuesto del producto no existe')

        const updatedObject = Object.assign(object, dto)
        return await this.productoImpuestoRepository.save(updatedObject)
    }

    async delete(id: number){
        return await this.productoImpuestoRepository.delete(id)
    }

    async deleteImpuestos(idProducto: number){
        const impuestosProducto = await this.getImpuestos(idProducto)
        let objectsDeleted = []
        for(let object of impuestosProducto){
            const objectDeleted = await this.productoImpuestoRepository.delete(object.id_producto_impuesto)
            objectsDeleted.push(objectDeleted)
        }
        return objectsDeleted
    }
}
