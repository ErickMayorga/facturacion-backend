import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('nota_de_debito_pago')
export class NotaDebitoPagoEntity {
    @PrimaryGeneratedColumn()
    id_nota_de_debito_pago: number
    @Column({type: 'int'})
    id_nota_de_debito: number
    @Column({type: 'int'})
    id_metodo_de_pago: number
    @Column({type: 'float'})
    valor_pago: number
    @Column({type: 'varchar', length: 45})
    medida_tiempo: string
    @Column({type: 'int'})
    plazo: number
}