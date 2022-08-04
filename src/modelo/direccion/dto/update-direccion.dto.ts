import {IsNumber, IsString} from "class-validator";

export class UpdateDireccionDto{
    @IsNumber()
    id_direccion
    @IsString()
    canton: string
    @IsString()
    parroquia: string
    @IsString()
    descripcion_exacta: string
}