import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('guia_de_remision')
export class GuiaRemisionEntity {
    @PrimaryGeneratedColumn()
    id_guia_de_remision: number
    @Column({type: 'int'})
    id_empresa: number
    @Column({type: 'varchar', length: 45})
    numero_comprobante: string
    @Column({type: 'date'})
    fecha_emision: Date
    @Column({type: 'varchar', length: 45})
    clave_acceso: string
    @Column({type: 'int'})
    id_direccion_partida: number
    @Column({type: "boolean"})
    habilitado: boolean
    @Column({type: 'int'})
    id_transportista: number
}