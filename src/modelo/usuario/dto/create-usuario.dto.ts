import {IsNumber, IsString} from "class-validator";

export class CreateUsuarioDto {
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