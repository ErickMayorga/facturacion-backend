import {IsNumber, IsString} from "class-validator";

export class CreateProductoDto {
    @IsNumber()
    id_usuario: number
    @IsString()
    codigo_principal: string
    @IsString()
    codigo_auxiliar?: string
    @IsString()
    tipo_producto: string
    @IsString()
    nombre: string
    @IsNumber()
    valor_unitario: number
}