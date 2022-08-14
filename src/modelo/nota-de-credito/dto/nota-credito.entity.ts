import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('nota_de_credito')
export class NotaCreditoEntity {
    @PrimaryGeneratedColumn()
    id_nota_de_credito: number
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
    @Column({type: 'varchar', length: 45})
    motivo: string
    @Column({type: 'float'})
    total_sin_impuestos: number
    @Column({type: 'float'})
    total_descuentos: number
    @Column({type: 'float'})
    total_sin_iva: number
    @Column({type: 'float'})
    total_iva: number
    @Column({type: 'float'})
    total_ice: number
    @Column({type: 'float'})
    total_irbpnr: number
    @Column({type: "boolean"})
    habilitado: boolean
}