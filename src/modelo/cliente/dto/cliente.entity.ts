import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('cliente')
export class ClienteEntity {
    @PrimaryGeneratedColumn()
    id_cliente: number
    @Column({type: 'int'})
    id_usuario: number
    @Column({type: 'varchar', length: 100})
    nombres_razon_social: string
    @Column({type: 'varchar', length: 45})
    tipo_identificacion: string
    @Column({type: 'int'})
    id_direccion: number
    @Column({type: 'varchar', length: 13})
    numero_identificacion: string
    @Column({type: 'varchar', length: 10})
    telefono: string
    @Column({type: 'varchar', length: 45})
    correo_electronico: string
}