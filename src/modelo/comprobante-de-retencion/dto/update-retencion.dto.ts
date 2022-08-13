import {IsBoolean, IsDateString, IsNumber, IsString} from "class-validator";

export class UpdateRetencionDto {
    @IsNumber()
    id_comprobante_de_retencion: number
    @IsNumber()
    id_empresa: number
    @IsNumber()
    id_factura: number
    @IsString()
    numero_comprobante: string
    @IsDateString()
    fecha_emision: Date
    @IsString()
    clave_acceso: string
    @IsBoolean()
    habilitado: boolean
}