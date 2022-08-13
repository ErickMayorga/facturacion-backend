import {IsDate, IsDateString, IsNumber, IsString} from "class-validator";

export class CreateRetencionDetalleDto {
    @IsNumber()
    id_comprobante_de_retencion: number
    @IsNumber()
    id_impuesto: number
    @IsString()
    codigo_retencion: string
    @IsString()
    codigo: string
    @IsString()
    descripcion: string
    @IsNumber()
    base_imponible: number
    @IsNumber()
    porcentaje: number
    @IsNumber()
    total: number
    @IsDateString()
    fecha: Date
    @IsNumber()
    id_factura: number
}