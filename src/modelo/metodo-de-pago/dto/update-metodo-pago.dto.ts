import {IsNumber, IsString} from "class-validator";

export class UpdateMetodoPagoDto {
    @IsNumber()
    id_metodo_de_pago: number
    @IsString()
    nombre_metodo_pago: string
}