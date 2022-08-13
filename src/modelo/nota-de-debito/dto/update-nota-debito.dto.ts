import {IsBoolean, IsDateString, IsNumber, IsString} from "class-validator";

export class UpdateNotaDebitoDto {
    @IsNumber()
    id_nota_de_debito: number
    @IsNumber()
    id_factura: number
    @IsNumber()
    id_empresa: number
    @IsString()
    numero_comprobante: string
    @IsDateString()
    fecha_emision: Date
    @IsString()
    clave_acceso: string
    @IsNumber()
    total_sin_modificacion: number
    @IsNumber()
    total_con_modificacion: number
    @IsBoolean()
    habilitado: boolean
}