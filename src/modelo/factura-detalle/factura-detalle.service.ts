import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {FacturaDetalleEntity} from "./dto/factura-detalle.entity";
import {CreateFacturaDetalleDto} from "./dto/create-factura-detalle.dto";
import {UpdateFacturaDetalleDto} from "./dto/update-factura-detalle.dto";

@Injectable()
export class FacturaDetalleService {
    constructor(@InjectRepository(FacturaDetalleEntity)
                private facturaDetalleRepository: Repository<FacturaDetalleEntity>) {
    }

    async getAll() {
        return await this.facturaDetalleRepository.find()
    }

    async getOne(id: number){
        const object = await this.facturaDetalleRepository.findOne({where: {id_factura_detalle: id}})
        if(!object) throw new NotFoundException()
        return object
    }

    async getDetalle(idFactura: number){
        return await this.facturaDetalleRepository
            .createQueryBuilder('factura_detalle')
            .where("factura_detalle.id_factura = :id", { id: idFactura })
            .getMany()
    }

    async create(dto: CreateFacturaDetalleDto){
        const object = this.facturaDetalleRepository.create(dto as any)
        return await this.facturaDetalleRepository.save(object)
    }

    async update(id: number, dto: UpdateFacturaDetalleDto){
        const object = await this.facturaDetalleRepository.findOne({where: {id_factura_detalle: id}})
        if(!object) throw new NotFoundException('Detalle de factura no existe')

        const updatedObject = Object.assign(object, dto)
        return await this.facturaDetalleRepository.save(updatedObject)
    }

    async delete(id: number){
        return await this.facturaDetalleRepository.delete(id)
    }

    async deleteDetalle(idFactura: number){
        const detalleFactura = await this.getDetalle(idFactura)
        let objectsDeleted = []
        for(let object of detalleFactura){
            const objectDeleted = await this.facturaDetalleRepository.delete(object.id_factura_detalle)
            objectsDeleted.push(objectDeleted)
        }
        return objectsDeleted
    }
}
