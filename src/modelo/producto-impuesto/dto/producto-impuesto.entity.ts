import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('producto_impuesto')
export class ProductoImpuestoEntity {
    @PrimaryGeneratedColumn()
    id_producto_impuesto: number
    @Column({type: 'int'})
    id_producto: number
    @Column({type: 'int'})
    id_impuesto: number
}