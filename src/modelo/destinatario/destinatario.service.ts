import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {RetencionDetalleEntity} from "../comprobante-de-retencion-detalle/dto/retencion-detalle.entity";
import {Repository} from "typeorm";
import {CreateRetencionDetalleDto} from "../comprobante-de-retencion-detalle/dto/create-retencion-detalle.dto";
import {UpdateRetencionDetalleDto} from "../comprobante-de-retencion-detalle/dto/update-retencion-detalle.dto";
import {DestinatarioEntity} from "./dto/destinatario.entity";
import {CreateDestinatarioDto} from "./dto/create-destinatario.dto";
import {UpdateDestinatarioDto} from "./dto/update-destinatario.dto";

@Injectable()
export class DestinatarioService {
    constructor(@InjectRepository(DestinatarioEntity)
                private destinatarioRepository: Repository<DestinatarioEntity>) {
    }

    async getAll() {
        return await this.destinatarioRepository.find()
    }

    async getOne(id: number){
        const object = await this.destinatarioRepository.findOne({where: {id_destinatario: id}})
        if(!object) throw new NotFoundException()
        return object
    }

    async getDestinatarios(idComprobante: number){
        return await this.destinatarioRepository
            .createQueryBuilder('destinatario')
            .where("destinatario.id_guia_de_remision = :id", { id: idComprobante })
            .getMany()
    }

    async create(dto: CreateDestinatarioDto){
        const object = this.destinatarioRepository.create(dto as any)
        return await this.destinatarioRepository.save(object)
    }

    async update(id: number, dto: UpdateDestinatarioDto){
        const object = await this.destinatarioRepository.findOne({where: {id_destinatario: id}})
        if(!object) throw new NotFoundException('Destinatario no existe')

        const updatedObject = Object.assign(object, dto)
        return await this.destinatarioRepository.save(updatedObject)
    }

    async delete(id: number){
        return await this.destinatarioRepository.delete(id)
    }

    async deleteDestinatarios(idComprobante: number){
        const destinatarios = await this.getDestinatarios(idComprobante)
        let objectsDeleted = []
        for(let object of destinatarios){
            const objectDeleted = await this.destinatarioRepository.delete(object.id_destinatario)
            objectsDeleted.push(objectDeleted)
        }
        return objectsDeleted
    }
}
