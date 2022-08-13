import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {RetencionEntity} from "./dto/retencion.entity";
import {CreateRetencionDto} from "./dto/create-retencion.dto";
import {UpdateRetencionDto} from "./dto/update-retencion.dto";

@Injectable()
export class ComprobanteDeRetencionService {
    constructor(@InjectRepository(RetencionEntity)
                private retencionRepository: Repository<RetencionEntity>) {
    }

    async getAll() {
        return await this.retencionRepository.find()
    }

    async getOne(id: number){
        const object = await this.retencionRepository.findOne({where: {id_comprobante_de_retencion: id}})
        if(!object) throw new NotFoundException()
        return object
    }

    async getComprobantes(idEmpresa: number){
        return this.retencionRepository
            .createQueryBuilder('comprobante_de_retencion')
            .where("comprobante_de_retencion.id_empresa = :id", { id: idEmpresa })
            .getMany()
    }

    async getComprobantesPorFactura(idFactura: number){
        return this.retencionRepository
            .createQueryBuilder('comprobante_de_retencion')
            .where("comprobante_de_retencion.id_factura = :id", { id: idFactura })
            .getMany()
    }

    async create(dto: CreateRetencionDto){
        const object = this.retencionRepository.create(dto as any)
        return await this.retencionRepository.save(object)
    }

    async update(id: number, dto: UpdateRetencionDto){
        const object = await this.retencionRepository.findOne({where: {id_comprobante_de_retencion: id}})
        if(!object) throw new NotFoundException('Retención no existe')

        const updatedObject = Object.assign(object, dto)
        return await this.retencionRepository.save(updatedObject)
    }

    async delete(id: number){
        return await this.retencionRepository.delete(id)
    }

    async deshabilitarComprobante(id: number){
        return this.retencionRepository.update(id, { habilitado: false })
    }
}
