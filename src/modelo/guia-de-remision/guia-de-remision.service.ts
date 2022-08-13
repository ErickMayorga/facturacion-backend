import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {GuiaRemisionEntity} from "./dto/guia-remision.entity";
import {CreateGuiaRemisionDto} from "./dto/create-guia-remision.dto";

@Injectable()
export class GuiaDeRemisionService {
    constructor(@InjectRepository(GuiaRemisionEntity)
                private guiaRemisionRepository: Repository<GuiaRemisionEntity>) {
    }

    async getAll() {
        return await this.guiaRemisionRepository.find()
    }

    async getOne(id: number){
        const object = await this.guiaRemisionRepository.findOne({where: {id_guia_de_remision: id}})
        if(!object) throw new NotFoundException()
        return object
    }

    async getRetenciones(idEmpresa: number){
        return this.guiaRemisionRepository
            .createQueryBuilder('guia_de_remision')
            .where("guia_de_remision.id_empresa = :id", { id: idEmpresa })
            .getMany()
    }

    async create(dto: CreateGuiaRemisionDto){
        const object = this.guiaRemisionRepository.create(dto as any)
        return await this.guiaRemisionRepository.save(object)
    }

    async update(id: number, dto: CreateGuiaRemisionDto){
        const object = await this.guiaRemisionRepository.findOne({where: {id_guia_de_remision: id}})
        if(!object) throw new NotFoundException('Guía de remisión no existe')

        const updatedObject = Object.assign(object, dto)
        return await this.guiaRemisionRepository.save(updatedObject)
    }

    async delete(id: number){
        return await this.guiaRemisionRepository.delete(id)
    }

    async deshabilitarComprobante(id: number){
        return this.guiaRemisionRepository.update(id, { habilitado: false })
    }
}
