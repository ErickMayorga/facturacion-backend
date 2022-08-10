import {IsNumber, IsString} from "class-validator";

export class CreateFacturaPagoDto {
    @IsNumber()
    id_factura: number
    @IsNumber()
    id_metodo_de_pago: number
    @IsNumber()
    valor_pago: number
    @IsString()
    medida_tiempo: string
    @IsNumber()
    plazo: number
}