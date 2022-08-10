import {IsNumber, IsString} from "class-validator";

export class CreateMetodoPagoDto {
    @IsString()
    nombre_metodo_pago: string
}