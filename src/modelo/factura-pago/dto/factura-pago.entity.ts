import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('factura_pago')
export class FacturaPagoEntity {
    @PrimaryGeneratedColumn()
    id_factura_pago: number
    @Column({type: 'int'})
    id_factura: number
    @Column({type: 'int'})
    id_metodo_de_pago: number
    @Column({type: 'float'})
    valor_pago: number
    @Column({type: 'varchar', length: 45})
    medida_tiempo: string
    @Column({type: 'int'})
    plazo: number
}