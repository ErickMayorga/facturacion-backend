import {IsNumber, IsString} from "class-validator";

export class UpdateUsuarioDto{
    @IsNumber()
    id_usuario: number
    @IsString()
    nombres: string
    @IsString()
    apellidos: string
    @IsString()
    correo_electronico: string
    @IsString()
    password: string
    @IsNumber()
    id_direccion: number
}