import { Module } from '@nestjs/common';
import { ComprobanteDeRetencionDetalleController } from './comprobante-de-retencion-detalle.controller';
import { ComprobanteDeRetencionDetalleService } from './comprobante-de-retencion-detalle.service';

@Module({
  controllers: [ComprobanteDeRetencionDetalleController],
  providers: [ComprobanteDeRetencionDetalleService]
})
export class ComprobanteDeRetencionDetalleModule {}
