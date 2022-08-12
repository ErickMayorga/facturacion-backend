import {IsBoolean, IsDate, IsDateString, IsNumber, IsString} from "class-validator";

export class CreateFacturaDto {
    @IsNumber()
    id_empresa: number
    @IsString()
    numero_comprobante: string
    @IsNumber()
    id_cliente: number
    @IsDateString()
    fecha_emision: Date
    @IsString()
    clave_acceso: string
    @IsString()
    guia_de_remision?: string
    @IsNumber()
    propina: number
    @IsNumber()
    importe_total: number
    @IsString()
    moneda: string
    @IsNumber()
    total_sin_impuestos: number
    @IsNumber()
    total_descuento: number
    @IsNumber()
    total_sin_iva: number
    @IsNumber()
    total_con_iva: number
    @IsBoolean()
    habilitado: boolean
}