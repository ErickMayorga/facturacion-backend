import {Injectable, NotFoundException} from '@nestjs/common';
import {Repository} from "typeorm";
import {UsuarioEntity} from "./dto/usuario.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateUsuarioDto} from "./dto/create-usuario.dto";
import {UpdateUsuarioDto} from "./dto/update-usuario.dto";

@Injectable()
export class UsuarioService {

    constructor(@InjectRepository(UsuarioEntity)
                private usuarioRepository: Repository<UsuarioEntity>) {
    }

    async getAll() {
        return await this.usuarioRepository.find()
    }

    async getOne(id: number){
        const object = await this.usuarioRepository.findOne({where: {id_usuario: id}})
        if(!object) throw new NotFoundException()
        return object
    }

    async create(dto: CreateUsuarioDto){
        const object = this.usuarioRepository.create(dto as any)
        return await this.usuarioRepository.save(object)
    }

    async update(id: number, dto: UpdateUsuarioDto){
        const object = await this.usuarioRepository.findOne({where: {id_usuario: id}})
        if(!object) throw new NotFoundException('Usuario no existe')

        const updatedObject = Object.assign(object, dto)
        return await this.usuarioRepository.save(updatedObject)
    }

    async delete(id: number){
        return await this.usuarioRepository.delete(id)
    }
}
