import {IsNumber, IsString} from "class-validator";

export class UpdateFacturaPagoDto {
    @IsNumber()
    id_factura_pago: number
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