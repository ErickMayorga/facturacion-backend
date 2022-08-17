import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('comprobante_de_retencion_detalle')
export class RetencionDetalleEntity {
    @PrimaryGeneratedColumn()
    id_comprobante_de_retencion_detalle: number
    @Column({type: 'int'})
    id_comprobante_de_retencion: number
    @Column({type: 'int'})
    id_impuesto:number
    @Column({type: 'float'})
    base_imponible: number
    @Column({type: 'float'})
    total: number
}