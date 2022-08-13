import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('destinatario')
export class DestinatarioEntity {
    @PrimaryGeneratedColumn()
    id_destinatario: number
    @Column({type: 'int'})
    id_guia_de_remision: number
    @Column({type: 'int'})
    id_factura:number
    @Column({type: 'int'})
    id_cliente:number
    @Column({type: 'varchar', length: 10})
    motivo: string
}