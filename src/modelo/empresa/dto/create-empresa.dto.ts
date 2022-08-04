import {IsBoolean, IsNumber, IsString} from "class-validator";

export class CreateEmpresaDto {
    @IsNumber()
    id_usuario: number
    @IsString()
    ruc: string
    @IsString()
    nombres_razon_social: string
    @IsString()
    nombre_comercial?: string
    @IsString()
    codigo_establecimiento: string
    @IsString()
    codigo_punto_emision: string
    @IsNumber()
    num_contribuyente_especial: number
    @IsNumber()
    id_direccion_matriz: number
    @IsNumber()
    id_direccion_establecimiento: number
    @IsBoolean()
    obligado_contabilidad: boolean
    @IsString()
    path_logo?: string
    @IsString()
    ambiente: string
}