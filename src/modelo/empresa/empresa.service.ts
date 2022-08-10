import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "../usuario/dto/usuario.entity";
import {Repository} from "typeorm";
import {CreateUsuarioDto} from "../usuario/dto/create-usuario.dto";
import {UpdateUsuarioDto} from "../usuario/dto/update-usuario.dto";
import {EmpresaEntity} from "./dto/empresa.entity";
import {CreateEmpresaDto} from "./dto/create-empresa.dto";
import {UpdateEmpresaDto} from "./dto/update-empresa.dto";

@Injectable()
export class EmpresaService {
    constructor(@InjectRepository(EmpresaEntity)
                private empresaRepository: Repository<EmpresaEntity>) {
    }

    async getAll() {
        return await this.empresaRepository.find()
    }

    async getOne(id: number){
        const object = await this.empresaRepository.findOne({where: {id_empresa: id}})
        if(!object) throw new NotFoundException()
        return object
    }

    async getEmpresa(idUsuario: number){
        return this.empresaRepository
            .createQueryBuilder('empresa')
            .where("empresa.id_usuario = :id", { id: idUsuario })
            .getOne()
    }

    async create(dto: CreateEmpresaDto){
        const object = this.empresaRepository.create(dto as any)
        return await this.empresaRepository.save(object)
    }

    async update(id: number, dto: UpdateEmpresaDto){
        const object = await this.empresaRepository.findOne({where: {id_empresa: id}})
        if(!object) throw new NotFoundException('Empresa no existe')

        const updatedObject = Object.assign(object, dto)
        return await this.empresaRepository.save(updatedObject)
    }

    async delete(id: number){
        return await this.empresaRepository.delete(id)
    }
}
