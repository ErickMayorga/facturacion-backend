import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {NotaCreditoDetalleEntity} from "./dto/nota-credito-detalle.entity";
import {CreateNotaCreditoDetalleDto} from "./dto/create-nota-credito-detalle.dto";
import {UpdateNotaCreditoDetalleDto} from "./dto/update-nota-credito-detalle.dto";

@Injectable()
export class NotaDeCreditoDetalleService {
    constructor(@InjectRepository(NotaCreditoDetalleEntity)
                private notaCreditoDetalleRepository: Repository<NotaCreditoDetalleEntity>) {
    }

    async getAll() {
        return await this.notaCreditoDetalleRepository.find()
    }

    async getOne(id: number){
        const object = await this.notaCreditoDetalleRepository.findOne({where: {id_nota_de_credito_detalle: id}})
        if(!object) throw new NotFoundException()
        return object
    }

    async getDetalle(idComprobante: number){
        return await this.notaCreditoDetalleRepository
            .createQueryBuilder('nota_de_credito_detalle')
            .where("nota_de_credito_detalle.id_nota_de_credito = :id", { id: idComprobante })
            .getMany()
    }

    async create(dto: CreateNotaCreditoDetalleDto){
        const object = this.notaCreditoDetalleRepository.create(dto as any)
        return await this.notaCreditoDetalleRepository.save(object)
    }

    async update(id: number, dto: UpdateNotaCreditoDetalleDto){
        const object = await this.notaCreditoDetalleRepository.findOne({where: {id_nota_de_credito_detalle: id}})
        if(!object) throw new NotFoundException('Detalle de nota de crédito no existe')

        const updatedObject = Object.assign(object, dto)
        return await this.notaCreditoDetalleRepository.save(updatedObject)
    }

    async delete(id: number){
        return await this.notaCreditoDetalleRepository.delete(id)
    }

    async deleteDetalle(idComprobante: number){
        const detalleComprobante = await this.getDetalle(idComprobante)
        let objectsDeleted = []
        for(let object of detalleComprobante){
            const objectDeleted = await this.notaCreditoDetalleRepository.delete(object.id_nota_de_credito_detalle)
            objectsDeleted.push(objectDeleted)
        }
        return objectsDeleted
    }
}
