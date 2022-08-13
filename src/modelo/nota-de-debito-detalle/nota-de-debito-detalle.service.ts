import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {NotaDebitoDetalleEntity} from "./dto/nota-debito-detalle.entity";
import {CreateNotaDebitoDetalleDto} from "./dto/create-nota-debito-detalle.dto";
import {UpdateNotaDebitoDetalleDto} from "./dto/update-nota-debito-detalle.dto";

@Injectable()
export class NotaDeDebitoDetalleService {
    constructor(@InjectRepository(NotaDebitoDetalleEntity)
                private notaDebitoDetalleRepository: Repository<NotaDebitoDetalleEntity>) {
    }

    async getAll() {
        return await this.notaDebitoDetalleRepository.find()
    }

    async getOne(id: number){
        const object = await this.notaDebitoDetalleRepository.findOne({where: {id_nota_de_debito_detalle: id}})
        if(!object) throw new NotFoundException()
        return object
    }

    async getDetalle(idComprobante: number){
        return await this.notaDebitoDetalleRepository
            .createQueryBuilder('nota_de_debito_detalle')
            .where("nota_de_debito_detalle.id_nota_de_debito = :id", { id: idComprobante })
            .getMany()
    }

    async create(dto: CreateNotaDebitoDetalleDto){
        const object = this.notaDebitoDetalleRepository.create(dto as any)
        return await this.notaDebitoDetalleRepository.save(object)
    }

    async update(id: number, dto: UpdateNotaDebitoDetalleDto){
        const object = await this.notaDebitoDetalleRepository.findOne({where: {id_nota_de_debito_detalle: id}})
        if(!object) throw new NotFoundException('Detalle de nota de débito no existe')

        const updatedObject = Object.assign(object, dto)
        return await this.notaDebitoDetalleRepository.save(updatedObject)
    }

    async delete(id: number){
        return await this.notaDebitoDetalleRepository.delete(id)
    }

    async deleteDetalle(idComprobante: number){
        const detalleComprobante = await this.getDetalle(idComprobante)
        let objectsDeleted = []
        for(let object of detalleComprobante){
            const objectDeleted = await this.notaDebitoDetalleRepository.delete(object.id_nota_de_debito_detalle)
            objectsDeleted.push(objectDeleted)
        }
        return objectsDeleted
    }
}
