import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('metodo_de_pago')
export class MetodoPagoEntity {
    @PrimaryGeneratedColumn()
    id_metodo_de_pago: number
    @Column({type: 'varchar', length: 45})
    nombre_metodo_pago: string
}