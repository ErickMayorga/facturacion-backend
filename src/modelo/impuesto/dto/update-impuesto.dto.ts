import {IsNumber, IsString} from "class-validator";

export class UpdateImpuestoDto {
    @IsNumber()
    id_impuesto: number
    @IsString()
    nombre_impuesto: string
    @IsNumber()
    valor_impuesto: number
    @IsString()
    categoria: string
    @IsString()
    tipo_tarifa: string
}