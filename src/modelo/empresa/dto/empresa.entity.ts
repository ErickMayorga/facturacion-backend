import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('empresa')
export class EmpresaEntity {
    @PrimaryGeneratedColumn()
    id_empresa: number
    @Column({type: 'int'})
    id_usuario: number
    @Column({type: 'varchar', length: 13})
    ruc: string
    @Column({type: 'varchar', length: 100})
    nombres_razon_social: string
    @Column({type: 'varchar', length: 45})
    nombre_comercial?: string
    @Column({type: 'varchar', length: 10})
    codigo_establecimiento: string
    @Column({type: 'varchar', length: 45})
    codigo_punto_emision: string
    @Column({type: 'int'})
    num_contribuyente_especial: number
    @Column({type: 'int'})
    id_direccion_matriz: number
    @Column({type: 'int'})
    id_direccion_establecimiento: number
    @Column({type: "boolean"})
    obligado_contabilidad: boolean
    @Column({type: 'varchar', length: 45})
    path_logo?: string
    @Column({type: 'varchar', length: 45})
    ambiente: string
}