import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {TransportistaEntity} from "./dto/transportista.entity";
import {CreateTransportistaDto} from "./dto/create-transportista.dto";
import {UpdateTransportistaDto} from "./dto/update-transportista.dto";

@Injectable()
export class TransportistaService {
    constructor(@InjectRepository(TransportistaEntity)
                private transportistaRepository: Repository<TransportistaEntity>) {
    }

    async getAll() {
        return await this.transportistaRepository.find()
    }

    async getTransportistas(idUsuario: number){
        return this.transportistaRepository
            .createQueryBuilder('transportista')
            .where("transportista.id_usuario = :id", { id: idUsuario })
            .getMany()
    }

    async getOne(id: number){
        const object = await this.transportistaRepository.findOne({where: {id_transportista: id}})
        if(!object) throw new NotFoundException()
        return object
    }

    async getTransportista(idUsuario: number, cedula: string){
        return this.transportistaRepository
            .createQueryBuilder('transportista')
            .where("transportista.id_usuario = :id", { id: idUsuario })
            .andWhere("transportista.numero_identificacion = :cedula", { cedula: cedula })
            .getOne()
    }

    async create(dto: CreateTransportistaDto){
        const object = this.transportistaRepository.create(dto as any)
        return await this.transportistaRepository.save(object)
    }

    async update(id: number, dto: UpdateTransportistaDto){
        const object = await this.transportistaRepository.findOne({where: {id_transportista: id}})
        if(!object) throw new NotFoundException('Transportista no existe')

        const updatedObject = Object.assign(object, dto)
        return await this.transportistaRepository.save(updatedObject)
    }

    async delete(id: number){
        return await this.transportistaRepository.delete(id)
    }
}
