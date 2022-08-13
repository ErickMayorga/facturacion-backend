import {IsNumber, IsString} from "class-validator";

export class UpdateDestinatarioDto {
    @IsNumber()
    id_destinatario: number
    @IsNumber()
    id_guia_de_remision: number
    @IsString()
    motivo: string
    @IsNumber()
    id_factura: number
    @IsNumber()
    id_cliente: number
}