import {IsNumber, IsString} from "class-validator";

export class CreateNotaDebitoPagoDto {
    @IsNumber()
    id_nota_de_debito: number
    @IsNumber()
    id_metodo_de_pago: number
    @IsNumber()
    valor_pago: number
    @IsString()
    medida_tiempo: string
    @IsNumber()
    plazo: number
}