import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {MetodoPagoEntity} from "./dto/metodo-pago.entity";
import {CreateMetodoPagoDto} from "./dto/create-metodo-pago.dto";
import {UpdateMetodoPagoDto} from "./dto/update-metodo-pago.dto";

@Injectable()
export class MetodoDePagoService {
    constructor(@InjectRepository(MetodoPagoEntity)
                private metodoPagoRepository: Repository<MetodoPagoEntity>) {
    }

    async getAll() {
        return await this.metodoPagoRepository.find()
    }

    async getOne(id: number){
        const object = await this.metodoPagoRepository.findOne({where: {id_metodo_de_pago: id}})
        if(!object) throw new NotFoundException()
        return object
    }

    async create(dto: CreateMetodoPagoDto){
        const object = this.metodoPagoRepository.create(dto as any)
        return await this.metodoPagoRepository.save(object)
    }

    async update(id: number, dto: UpdateMetodoPagoDto){
        const object = await this.metodoPagoRepository.findOne({where: {id_metodo_de_pago: id}})
        if(!object) throw new NotFoundException('Método de pago no existe')

        const updatedObject = Object.assign(object, dto)
        return await this.metodoPagoRepository.save(updatedObject)
    }

    async delete(id: number){
        return await this.metodoPagoRepository.delete(id)
    }
}
