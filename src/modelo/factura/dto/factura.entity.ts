import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('factura')
export class FacturaEntity {
    @PrimaryGeneratedColumn()
    id_factura: number
    @Column({type: 'int'})
    id_empresa: number
    @Column({type: 'varchar', length: 45})
    numero_comprobante: string
    @Column({type: 'int'})
    id_cliente: number
    @Column({type: 'date'})
    fecha_emision: Date
    @Column({type: 'varchar', length: 45})
    clave_acceso: string
    @Column({type: 'varchar', length: 45})
    guia_de_remision?: string
    @Column({type: 'float'})
    propina: number
    @Column({type: 'float'})
    importe_total: number
    @Column({type: 'varchar', length: 45})
    moneda: string
    @Column({type: 'float'})
    total_sin_impuestos: number
    @Column({type: 'float'})
    total_descuento: number
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