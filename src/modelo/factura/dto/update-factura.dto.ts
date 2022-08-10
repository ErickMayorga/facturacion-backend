import {IsDate, IsNumber, IsString} from "class-validator";

export class UpdateFacturaDto {
    @IsNumber()
    id_factura: number
    @IsNumber()
    id_empresa: number
    @IsString()
    numero_comprobante: string
    @IsNumber()
    id_cliente: number
    @IsDate()
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
}