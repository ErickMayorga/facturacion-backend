import {Injectable, NotFoundException} from '@nestjs/common';
import {Repository} from "typeorm";
import {UsuarioEntity} from "./entity/usuario.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateUsuarioDto} from "./dto/create-usuario.dto";
import {UpdateUsuarioDto} from "./dto/update-usuario.dto";

@Injectable()
export class UsuarioService {

    constructor(@InjectRepository(UsuarioEntity)
                private postRepository: Repository<UsuarioEntity>) {
    }

    async getAll() {
        return await this.postRepository.find()
    }

    async getOne(id: number){
        const object = await this.postRepository.findOne({where: {id: id}})
        if(!object) throw new NotFoundException()
        return object
    }

    async create(dto: CreateUsuarioDto){
        const object = this.postRepository.create(dto as any)
        return await this.postRepository.save(object)
    }

    async update(id: number, dto: UpdateUsuarioDto){
        const object = await this.postRepository.findOne({where: {id: id}})
        if(!object) throw new NotFoundException('Usuario no existe')

        const updatedObject = Object.assign(object, dto)
        return await this.postRepository.save(updatedObject)
    }

    async delete(id: number){
        return await this.postRepository.delete(id)
    }
}
