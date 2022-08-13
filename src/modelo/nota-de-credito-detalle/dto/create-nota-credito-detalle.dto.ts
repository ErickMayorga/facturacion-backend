import {IsDate, IsDateString, IsNumber, IsString} from "class-validator";

export class CreateNotaCreditoDetalleDto {
    @IsNumber()
    id_nota_de_credito: number
    @IsNumber()
    cantidad: number
    @IsNumber()
    descuento: number
    @IsNumber()
    total_producto: number
}