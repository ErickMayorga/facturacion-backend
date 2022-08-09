import {IsNumber, IsString} from "class-validator";

export class UpdateProductoImpuestoDto {
    @IsNumber()
    id_producto_impuesto: number
    @IsNumber()
    id_producto: number
    @IsNumber()
    id_impuesto: number
}