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
    @IsNumber()
    valor_iva: number
    @IsNumber()
    valor_ice: number
    @IsNumber()
    valor_irbpnr: number
}