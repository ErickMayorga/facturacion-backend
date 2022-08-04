import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "../usuario/dto/usuario.entity";
import {Repository} from "typeorm";
import {CreateUsuarioDto} from "../usuario/dto/create-usuario.dto";
import {UpdateUsuarioDto} from "../usuario/dto/update-usuario.dto";
import {DireccionEntity} from "./dto/direccion.entity";
import {CreateDireccionDto} from "./dto/create-direccion.dto";
import {UpdateDireccionDto} from "./dto/update-direccion.dto";

@Injectable()
export class DireccionService {
    constructor(@InjectRepository(DireccionEntity)
                private direccionRepository: Repository<DireccionEntity>) {
    }

    async getAll() {
        return await this.direccionRepository.find()
    }

    async getOne(id: number){
        const object = await this.direccionRepository.findOne({where: {id_direccion: id}})
        if(!object) throw new NotFoundException()
        return object
    }

    async create(dto: CreateDireccionDto){
        const object = this.direccionRepository.create(dto as any)
        return await this.direccionRepository.save(object)
    }

    async update(id: number, dto: UpdateDireccionDto){
        const object = await this.direccionRepository.findOne({where: {id_direccion: id}})
        if(!object) throw new NotFoundException('Dirección no existe')

        const updatedObject = Object.assign(object, dto)
        return await this.direccionRepository.save(updatedObject)
    }

    async delete(id: number){
        return await this.direccionRepository.delete(id)
    }
}
