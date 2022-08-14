import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('factura_detalle')
export class FacturaDetalleEntity {
    @PrimaryGeneratedColumn()
    id_factura_detalle: number
    @Column({type: 'int'})
    id_factura: number
    @Column({type: 'int'})
    id_producto: number
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