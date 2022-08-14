import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('nota_de_credito_detalle')
export class NotaCreditoDetalleEntity {
    @PrimaryGeneratedColumn()
    id_nota_de_credito_detalle: number
    @Column({type: 'int'})
    id_nota_de_credito: number
    @Column({type: 'int'})
    cantidad: number
    @Column({type: 'float'})
    descuento: number
    @Column({type: 'float'})
    total_producto: number
    @Column({type: 'float'})
    valor_iva: number
    @Column({type: 'float'})
    valor_ice: number
    @Column({type: 'float'})
    valor_irbpnr: number
}