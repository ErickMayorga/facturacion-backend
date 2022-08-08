import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('transportista')
export class ProductoEntity {
    @PrimaryGeneratedColumn()
    id_producto: number
    @Column({type: 'int'})
    id_usuario: number
    @Column({type: 'varchar', length: 10})
    codigo_principal: string
    @Column({type: 'varchar', length: 10})
    codigo_auxiliar?: string
    @Column({type: 'varchar', length: 45})
    tipo_producto: string
    @Column({type: 'varchar', length: 45})
    nombre: string
    @Column({type: 'float'})
    valor_unitario: number
}