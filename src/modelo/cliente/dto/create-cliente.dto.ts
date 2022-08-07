import {IsNumber, IsString} from "class-validator";

export class CreateClienteDto {
    @IsNumber()
    id_usuario: number
    @IsString()
    nombres_razon_social: string
    @IsString()
    tipo_identificacion: string
    @IsNumber()
    id_direccion: number
    @IsString()
    numero_identificacion: string
    @IsString()
    telefono: string
    @IsString()
    correo_electronico: string
}