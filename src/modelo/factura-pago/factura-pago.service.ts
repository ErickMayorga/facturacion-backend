import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {FacturaPagoEntity} from "./dto/factura-pago.entity";
import {CreateFacturaPagoDto} from "./dto/create-factura-pago.dto";
import {UpdateFacturaPagoDto} from "./dto/update-factura-pago.dto";

@Injectable()
export class FacturaPagoService {
    constructor(@InjectRepository(FacturaPagoEntity)
                private facturaPagoRepository: Repository<FacturaPagoEntity>) {
    }

    async getAll() {
        return await this.facturaPagoRepository.find()
    }

    async getOne(id: number){
        const object = await this.facturaPagoRepository.findOne({where: {id_factura_pago: id}})
        if(!object) throw new NotFoundException()
        return object
    }

    async getPagos(idFactura: number){
        return await this.facturaPagoRepository
            .createQueryBuilder('factura_pago')
            .where("factura_pago.id_factura = :id", { id: idFactura })
            .getMany()
    }

    async create(dto: CreateFacturaPagoDto){
        const object = this.facturaPagoRepository.create(dto as any)
        return await this.facturaPagoRepository.save(object)
    }

    async update(id: number, dto: UpdateFacturaPagoDto){
        const object = await this.facturaPagoRepository.findOne({where: {id_factura_pago: id}})
        if(!object) throw new NotFoundException('Pago de factura no existe')

        const updatedObject = Object.assign(object, dto)
        return await this.facturaPagoRepository.save(updatedObject)
    }

    async delete(id: number){
        return await this.facturaPagoRepository.delete(id)
    }

    async deletePagos(idFactura: number){
        const pagosFactura = await this.getPagos(idFactura)
        let objectsDeleted = []
        for(let object of pagosFactura){
            const objectDeleted = await this.facturaPagoRepository.delete(object.id_factura_pago)
            objectsDeleted.push(objectDeleted)
        }
        return objectsDeleted
    }
}
