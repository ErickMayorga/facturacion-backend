import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ImpuestoEntity} from "./dto/impuesto.entity";
import {CreateImpuestoDto} from "./dto/create-impuesto.dto";
import {UpdateImpuestoDto} from "./dto/update-impuesto.dto";

@Injectable()
export class ImpuestoService {
    constructor(@InjectRepository(ImpuestoEntity)
                private impuestoRepository: Repository<ImpuestoEntity>) {
    }

    async getAll() {
        return await this.impuestoRepository.find()
    }

    async getOne(id: number){
        const object = await this.impuestoRepository.findOne({where: {id_impuesto: id}})
        if(!object) throw new NotFoundException()
        return object
    }

    async create(dto: CreateImpuestoDto){
        const object = this.impuestoRepository.create(dto as any)
        return await this.impuestoRepository.save(object)
    }

    async update(id: number, dto: UpdateImpuestoDto){
        const object = await this.impuestoRepository.findOne({where: {id_impuesto: id}})
        if(!object) throw new NotFoundException('Impuesto no existe')

        const updatedObject = Object.assign(object, dto)
        return await this.impuestoRepository.save(updatedObject)
    }

    async delete(id: number){
        return await this.impuestoRepository.delete(id)
    }
}
