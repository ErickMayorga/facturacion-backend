import {IsNumber, IsString} from "class-validator";

export class CreateDireccionDto {
    @IsString()
    canton: string
    @IsString()
    parroquia: string
    @IsString()
    descripcion_exacta: string

}