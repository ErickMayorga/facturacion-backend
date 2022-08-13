import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {NotaDebitoEntity} from "./dto/nota-debito.entity";
import {CreateNotaDebitoDto} from "./dto/create-nota-debito.dto";
import {UpdateNotaDebitoDto} from "./dto/update-nota-debito.dto";

@Injectable()
export class NotaDeDebitoService {
    constructor(@InjectRepository(NotaDebitoEntity)
                private notaDebitoRepository: Repository<NotaDebitoEntity>) {
    }

    async getAll() {
        return await this.notaDebitoRepository.find()
    }

    async getOne(id: number){
        const object = await this.notaDebitoRepository.findOne({where: {id_nota_de_debito: id}})
        if(!object) throw new NotFoundException()
        return object
    }

    async getComprobantes(idEmpresa: number){
        return this.notaDebitoRepository
            .createQueryBuilder('nota_de_debito')
            .where("nota_de_debito.id_empresa = :id", { id: idEmpresa })
            .getMany()
    }

    async getComprobantesPorFactura(idFactura: number){
        return this.notaDebitoRepository
            .createQueryBuilder('nota_de_debito')
            .where("nota_de_debito.id_factura = :id", { id: idFactura })
            .getMany()
    }

    async create(dto: CreateNotaDebitoDto){
        const object = this.notaDebitoRepository.create(dto as any)
        return await this.notaDebitoRepository.save(object)
    }

    async update(id: number, dto: UpdateNotaDebitoDto){
        const object = await this.notaDebitoRepository.findOne({where: {id_nota_de_debito: id}})
        if(!object) throw new NotFoundException('Nota de débito no existe')

        const updatedObject = Object.assign(object, dto)
        return await this.notaDebitoRepository.save(updatedObject)
    }

    async delete(id: number){
        return await this.notaDebitoRepository.delete(id)
    }

    async deshabilitarComprobante(id: number){
        return this.notaDebitoRepository.update(id, { habilitado: false })
    }
}
