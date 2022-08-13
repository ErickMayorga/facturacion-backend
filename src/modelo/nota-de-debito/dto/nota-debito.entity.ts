import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('nota_de_debito')
export class NotaDebitoEntity {
    @PrimaryGeneratedColumn()
    id_nota_de_debito: number
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
    @Column({type: 'float'})
    total_sin_modificacion: number
    @Column({type: 'float'})
    total_con_modificacion: number
    @Column({type: "boolean"})
    habilitado: boolean
}