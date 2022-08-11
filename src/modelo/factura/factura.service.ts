import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {FacturaEntity} from "./dto/factura.entity";
import {CreateFacturaDto} from "./dto/create-factura.dto";
import {UpdateFacturaDto} from "./dto/update-factura.dto";

@Injectable()
export class FacturaService {
    constructor(@InjectRepository(FacturaEntity)
                private facturaRepository: Repository<FacturaEntity>) {
    }

    async getAll() {
        return await this.facturaRepository.find()
    }

    async getOne(id: number){
        const object = await this.facturaRepository.findOne({where: {id_factura: id}})
        if(!object) throw new NotFoundException()
        return object
    }

    async getNextIndex(idEmpresa: number){
        return this.facturaRepository
            .createQueryBuilder('factura')
            .where("factura.id_empresa = :id", { id: idEmpresa })
            .getMany()
    }

    async create(dto: CreateFacturaDto){
        const object = this.facturaRepository.create(dto as any)
        return await this.facturaRepository.save(object)
    }

    async update(id: number, dto: UpdateFacturaDto){
        const object = await this.facturaRepository.findOne({where: {id_factura: id}})
        if(!object) throw new NotFoundException('Factura no existe')

        const updatedObject = Object.assign(object, dto)
        return await this.facturaRepository.save(updatedObject)
    }

    async delete(id: number){
        return await this.facturaRepository.delete(id)
    }
}
