import {IsBoolean, IsDateString, IsNumber, IsString} from "class-validator";

export class UpdateNotaCreditoDto {
    @IsNumber()
    id_nota_de_credito: number
    @IsNumber()
    id_factura: number
    @IsString()
    numero_comprobante: string
    @IsDateString()
    fecha_emision: Date
    @IsString()
    clave_acceso: string
    @IsString()
    motivo: string
    @IsNumber()
    total_sin_impuestos: number
    @IsNumber()
    total_descuentos: number
    @IsNumber()
    total_sin_iva: number
    @IsNumber()
    total_iva: number
    @IsNumber()
    total_ice: number
    @IsNumber()
    total_irbpnr: number
    @IsBoolean()
    habilitado: boolean
    @IsNumber()
    id_empresa: number
}