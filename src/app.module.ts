import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioModule} from "./modelo/usuario/usuario.module";
import {DireccionModule} from "./modelo/direccion/direccion.module";
import {ClienteModule} from "./modelo/cliente/cliente.module";
import {ComprobanteDeRetencionModule} from "./modelo/comprobante-de-retencion/comprobante-de-retencion.module";
import {ComprobanteDeRetencionDetalleModule} from "./modelo/comprobante-de-retencion-detalle/comprobante-de-retencion-detalle.module";
import {DestinatarioModule} from "./modelo/destinatario/destinatario.module";
import {EmpresaModule} from "./modelo/empresa/empresa.module";
import {FacturaModule} from "./modelo/factura/factura.module";
import {FacturaDetalleModule} from "./modelo/factura-detalle/factura-detalle.module";
import {FacturaPagoModule} from "./modelo/factura-pago/factura-pago.module";
import {GuiaDeRemisionModule} from "./modelo/guia-de-remision/guia-de-remision.module";
import {ImpuestoModule} from "./modelo/impuesto/impuesto.module";
import {MetodoDePagoModule} from "./modelo/metodo-de-pago/metodo-de-pago.module";
import {NotaDeCreditoModule} from "./modelo/nota-de-credito/nota-de-credito.module";
import {NotaDeCreditoDetalleModule} from "./modelo/nota-de-credito-detalle/nota-de-credito-detalle.module";
import {NotaDeDebitoModule} from "./modelo/nota-de-debito/nota-de-debito.module";
import {NotaDeDebitoPagoModule} from "./modelo/nota-de-debito-pago/nota-de-debito-pago.module";
import {NotaDeDebitoDetalleModule} from "./modelo/nota-de-debito-detalle/nota-de-debito-detalle.module";
import {ProductoModule} from "./modelo/producto/producto.module";
import {ProductoImpuestoModule} from "./modelo/producto-impuesto/producto-impuesto.module";
import {TransportistaModule} from "./modelo/transportista/transportista.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'facturacion-db.mysql.database.azure.com',
      port: 3306,
      username: 'erickmayorga@facturacion-db',
      password: 'Zodiac#64',
      database: 'facturacion_db',
      entities: [__dirname + './**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),
      UsuarioModule,
      DireccionModule,
      ClienteModule,
      ComprobanteDeRetencionModule,
      ComprobanteDeRetencionDetalleModule,
      DestinatarioModule,
      EmpresaModule,
      FacturaModule,
      FacturaDetalleModule,
      FacturaPagoModule,
      GuiaDeRemisionModule,
      ImpuestoModule,
      MetodoDePagoModule,
      NotaDeCreditoModule,
      NotaDeCreditoDetalleModule,
      NotaDeDebitoModule,
      NotaDeDebitoPagoModule,
      NotaDeDebitoDetalleModule,
      ProductoModule,
      ProductoImpuestoModule,
      TransportistaModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
