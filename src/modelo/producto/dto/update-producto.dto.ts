import {IsNumber, IsString} from "class-validator";

export class UpdateProductoDto {
    @IsNumber()
    id_producto: number
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