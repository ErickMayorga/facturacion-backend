import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {RetencionDetalleEntity} from "./dto/retencion-detalle.entity";
import {CreateRetencionDetalleDto} from "./dto/create-retencion-detalle.dto";
import {UpdateRetencionDetalleDto} from "./dto/update-retencion-detalle.dto";

@Injectable()
export class ComprobanteDeRetencionDetalleService {
    constructor(@InjectRepository(RetencionDetalleEntity)
                private retencionDetalleRepository: Repository<RetencionDetalleEntity>) {
    }

    async getAll() {
        return await this.retencionDetalleRepository.find()
    }

    async getOne(id: number){
        const object = await this.retencionDetalleRepository.findOne({where: {id_comprobante_de_retencion_detalle: id}})
        if(!object) throw new NotFoundException()
        return object
    }

    async getDetalle(idComprobante: number){
        return await this.retencionDetalleRepository
            .createQueryBuilder('comprobante_de_retencion_detalle')
            .where("comprobante_de_retencion_detalle.id_comprobante_de_retencion = :id", { id: idComprobante })
            .getMany()
    }

    async create(dto: CreateRetencionDetalleDto){
        const object = this.retencionDetalleRepository.create(dto as any)
        return await this.retencionDetalleRepository.save(object)
    }

    async update(id: number, dto: UpdateRetencionDetalleDto){
        const object = await this.retencionDetalleRepository.findOne({where: {id_comprobante_de_retencion_detalle: id}})
        if(!object) throw new NotFoundException('Detalle de retención no existe')

        const updatedObject = Object.assign(object, dto)
        return await this.retencionDetalleRepository.save(updatedObject)
    }

    async delete(id: number){
        return await this.retencionDetalleRepository.delete(id)
    }

    async deleteDetalle(idComprobante: number){
        const detalleComprobante = await this.getDetalle(idComprobante)
        let objectsDeleted = []
        for(let object of detalleComprobante){
            const objectDeleted = await this.retencionDetalleRepository.delete(object.id_comprobante_de_retencion_detalle)
            objectsDeleted.push(objectDeleted)
        }
        return objectsDeleted
    }
}
