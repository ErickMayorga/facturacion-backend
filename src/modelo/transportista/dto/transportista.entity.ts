import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('transportista')
export class TransportistaEntity {
    @PrimaryGeneratedColumn()
    id_transportista: number
    @Column({type: 'int'})
    id_usuario: number
    @Column({type: 'varchar', length: 100})
    nombres_razon_social: string
    @Column({type: 'varchar', length: 30})
    tipo_identificacion: string
    @Column({type: 'varchar', length: 13})
    numero_identificacion: string
    @Column({type: 'varchar', length: 45})
    correo_electronico: string
    @Column({type: 'varchar', length: 9})
    placa: string
}