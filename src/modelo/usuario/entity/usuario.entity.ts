import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('first_table')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar', length: 20})
    nombre: string
}