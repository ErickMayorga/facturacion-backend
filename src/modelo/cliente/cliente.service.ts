import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ClienteEntity} from "./dto/cliente.entity";
import {CreateClienteDto} from "./dto/create-cliente.dto";
import {UpdateClienteDto} from "./dto/update-cliente.dto";

@Injectable()
export class ClienteService {
    constructor(@InjectRepository(ClienteEntity)
                private clienteRepository: Repository<ClienteEntity>) {
    }

    async getAll() {
        return await this.clienteRepository.find()
    }

    async getOne(id: number){
        const object = await this.clienteRepository.findOne({where: {id_cliente: id}})
        if(!object) throw new NotFoundException()
        return object
    }

    async create(dto: CreateClienteDto){
        const object = this.clienteRepository.create(dto as any)
        return await this.clienteRepository.save(object)
    }

    async update(id: number, dto: UpdateClienteDto){
        const object = await this.clienteRepository.findOne({where: {id_cliente: id}})
        if(!object) throw new NotFoundException('Cliente no existe')

        const updatedObject = Object.assign(object, dto)
        return await this.clienteRepository.save(updatedObject)
    }

    async delete(id: number){
        return await this.clienteRepository.delete(id)
    }
}
