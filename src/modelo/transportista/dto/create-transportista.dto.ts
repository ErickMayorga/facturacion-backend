import {IsNumber, IsString} from "class-validator";

export class CreateTransportistaDto {
    @IsNumber()
    id_usuario: number
    @IsString()
    nombres_razon_social: string
    @IsString()
    tipo_identificacion: string
    @IsString()
    numero_identificacion: string
    @IsString()
    correo_electronico: string
    @IsString()
    placa: string
}