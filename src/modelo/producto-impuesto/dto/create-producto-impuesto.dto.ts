import {IsNumber, IsString} from "class-validator";

export class CreateProductoImpuestoDto {
    @IsNumber()
    id_producto: number
    @IsNumber()
    id_impuesto: number
}