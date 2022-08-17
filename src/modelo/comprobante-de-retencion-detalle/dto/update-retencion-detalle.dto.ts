import {IsDate, IsDateString, IsNumber, IsString} from "class-validator";

export class UpdateRetencionDetalleDto {
    @IsNumber()
    id_comprobante_de_retencion_detalle: number
    @IsNumber()
    id_comprobante_de_retencion: number
    @IsNumber()
    id_impuesto: number
    @IsNumber()
    base_imponible: number
    @IsNumber()
    total: number
}