import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('usuario')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id_usuario: number
    @Column({type: 'varchar', length: 45})
    nombres: string
    @Column({type: 'varchar', length: 45})
    apellidos: string
    @Column({type: 'varchar', length: 45})
    correo_electronico: string
    @Column({type: 'varchar', length: 16})
    password: string
    @Column({type: 'int'})
    id_direccion: number
}