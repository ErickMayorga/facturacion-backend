import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('comprobante_de_retencion')
export class RetencionEntity {
    @PrimaryGeneratedColumn()
    id_comprobante_de_retencion: number
    @Column({type: 'int'})
    id_empresa: number
    @Column({type: 'int'})
    id_factura: number
    @Column({type: 'varchar', length: 45})
    numero_comprobante: string
    @Column({type: 'date'})
    fecha_emision: Date
    @Column({type: 'varchar', length: 45})
    clave_acceso: string
    @Column({type: "boolean"})
    habilitado: boolean
    @Column({type: 'float'})
    total_retenido: number
}