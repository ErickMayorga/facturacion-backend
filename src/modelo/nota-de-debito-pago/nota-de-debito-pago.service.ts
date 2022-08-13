import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {FacturaPagoEntity} from "../factura-pago/dto/factura-pago.entity";
import {Repository} from "typeorm";
import {CreateFacturaPagoDto} from "../factura-pago/dto/create-factura-pago.dto";
import {UpdateFacturaPagoDto} from "../factura-pago/dto/update-factura-pago.dto";
import {NotaDebitoPagoEntity} from "./dto/nota-debito-pago.entity";
import {CreateNotaDebitoPagoDto} from "./dto/create-nota-debito-pago.dto";
import {UpdateNotaDebitoPagoDto} from "./dto/update-nota-debito-pago.dto";

@Injectable()
export class NotaDeDebitoPagoService {
    constructor(@InjectRepository(NotaDebitoPagoEntity)
                private notaDebitoPagoRepository: Repository<NotaDebitoPagoEntity>) {
    }

    async getAll() {
        return await this.notaDebitoPagoRepository.find()
    }

    async getOne(id: number){
        const object = await this.notaDebitoPagoRepository.findOne({where: {id_nota_de_debito_pago: id}})
        if(!object) throw new NotFoundException()
        return object
    }

    async getPagos(idNotaDebito: number){
        return await this.notaDebitoPagoRepository
            .createQueryBuilder('nota_de_debito_pago')
            .where("nota_de_debito_pago.id_nota_de_debito = :id", { id: idNotaDebito })
            .getMany()
    }

    async create(dto: CreateNotaDebitoPagoDto){
        const object = this.notaDebitoPagoRepository.create(dto as any)
        return await this.notaDebitoPagoRepository.save(object)
    }

    async update(id: number, dto: UpdateNotaDebitoPagoDto){
        const object = await this.notaDebitoPagoRepository.findOne({where: {id_nota_de_debito_pago: id}})
        if(!object) throw new NotFoundException('Pago de nota de débito no existe')

        const updatedObject = Object.assign(object, dto)
        return await this.notaDebitoPagoRepository.save(updatedObject)
    }

    async delete(id: number){
        return await this.notaDebitoPagoRepository.delete(id)
    }

    async deletePagos(idNotaDebito: number){
        const pagosNotaDebito = await this.getPagos(idNotaDebito)
        let objectsDeleted = []
        for(let object of pagosNotaDebito){
            const objectDeleted = await this.notaDebitoPagoRepository.delete(object.id_nota_de_debito_pago)
            objectsDeleted.push(objectDeleted)
        }
        return objectsDeleted
    }
}
