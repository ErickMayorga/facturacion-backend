import {IsBoolean, IsDateString, IsNumber, IsString} from "class-validator";

export class CreateGuiaRemisionDto {
    @IsNumber()
    id_transportista: number
    @IsString()
    numero_comprobante: string
    @IsDateString()
    fecha_emision: Date
    @IsString()
    clave_acceso: string
    @IsNumber()
    id_direccion_partida: number
    @IsBoolean()
    habilitado: boolean
    @IsNumber()
    id_empresa: number
}