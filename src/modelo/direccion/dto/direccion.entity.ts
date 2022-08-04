import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('direccion')
export class DireccionEntity {
    @PrimaryGeneratedColumn()
    id_direccion: number
    @Column({type: 'varchar', length: 45})
    canton: string
    @Column({type: 'varchar', length: 45})
    parroquia: string
    @Column({type: 'varchar', length: 100})
    descripcion_exacta: string
}