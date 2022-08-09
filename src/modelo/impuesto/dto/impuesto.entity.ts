import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('impuesto')
export class ImpuestoEntity {
    @PrimaryGeneratedColumn()
    id_impuesto: number
    @Column({type: 'varchar', length: 45})
    nombre_impuesto: string
    @Column({type: 'float'})
    valor_impuesto: number
    @Column({type: 'varchar', length: 45})
    categoria: string
    @Column({type: 'varchar', length: 45})
    tipo_tarifa: string
}