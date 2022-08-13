import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {NotaCreditoEntity} from "./dto/nota-credito.entity";
import {CreateNotaCreditoDto} from "./dto/create-nota-credito.dto";
import {UpdateNotaCreditoDto} from "./dto/update-nota-credito.dto";

@Injectable()
export class NotaDeCreditoService {
    constructor(@InjectRepository(NotaCreditoEntity)
                private notaCreditoRepository: Repository<NotaCreditoEntity>) {
    }

    async getAll() {
        return await this.notaCreditoRepository.find()
    }

    async getOne(id: number){
        const object = await this.notaCreditoRepository.findOne({where: {id_nota_de_credito: id}})
        if(!object) throw new NotFoundException()
        return object
    }

    async getComprobantes(idEmpresa: number){
        return this.notaCreditoRepository
            .createQueryBuilder('nota_de_credito')
            .where("nota_de_credito.id_empresa = :id", { id: idEmpresa })
            .getMany()
    }

    async getComprobantesPorFactura(idFactura: number){
        return this.notaCreditoRepository
            .createQueryBuilder('nota_de_credito')
            .where("nota_de_credito.id_factura = :id", { id: idFactura })
            .getMany()
    }

    async create(dto: CreateNotaCreditoDto){
        const object = this.notaCreditoRepository.create(dto as any)
        return await this.notaCreditoRepository.save(object)
    }

    async update(id: number, dto: UpdateNotaCreditoDto){
        const object = await this.notaCreditoRepository.findOne({where: {id_nota_de_credito: id}})
        if(!object) throw new NotFoundException('Nota de crédito no existe')

        const updatedObject = Object.assign(object, dto)
        return await this.notaCreditoRepository.save(updatedObject)
    }

    async delete(id: number){
        return await this.notaCreditoRepository.delete(id)
    }

    async deshabilitarComprobante(id: number){
        return this.notaCreditoRepository.update(id, { habilitado: false })
    }
}
