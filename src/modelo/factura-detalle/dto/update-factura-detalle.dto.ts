import {IsDate, IsNumber, IsString} from "class-validator";

export class UpdateFacturaDetalleDto {
    @IsNumber()
    id_factura_detalle: number
    @IsNumber()
    id_factura: number
    @IsNumber()
    id_producto: number
    @IsNumber()
    cantidad: number
    @IsNumber()
    descuento: number
    @IsNumber()
    total_producto: number
    @IsNumber()
    valor_ice: number
    @IsNumber()
    valor_irbpnr: number
}