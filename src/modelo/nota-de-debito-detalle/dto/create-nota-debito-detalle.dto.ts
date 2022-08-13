import {IsDate, IsDateString, IsNumber, IsString} from "class-validator";

export class CreateNotaDebitoDetalleDto {
    @IsNumber()
    id_nota_de_debito: number
    @IsString()
    razon_modificacion: string
    @IsNumber()
    valor_modificacion: number
}