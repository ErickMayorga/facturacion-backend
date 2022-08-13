import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('nota_de_debito_detalle')
export class NotaDebitoDetalleEntity {
    @PrimaryGeneratedColumn()
    id_nota_de_debito_detalle: number
    @Column({type: 'int'})
    id_nota_de_debito: number
    @Column({type: 'varchar', length: 45})
    razon_modificacion: string
    @Column({type: 'float'})
    valor_modificacion: number
}