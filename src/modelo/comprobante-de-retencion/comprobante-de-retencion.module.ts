import { Module } from '@nestjs/common';
import { ComprobanteDeRetencionController } from './comprobante-de-retencion.controller';
import { ComprobanteDeRetencionService } from './comprobante-de-retencion.service';

@Module({
  controllers: [ComprobanteDeRetencionController],
  providers: [ComprobanteDeRetencionService]
})
export class ComprobanteDeRetencionModule {}
