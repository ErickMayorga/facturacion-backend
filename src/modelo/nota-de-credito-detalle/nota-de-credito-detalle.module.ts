import { Module } from '@nestjs/common';
import { NotaDeCreditoDetalleController } from './nota-de-credito-detalle.controller';
import { NotaDeCreditoDetalleService } from './nota-de-credito-detalle.service';

@Module({
  controllers: [NotaDeCreditoDetalleController],
  providers: [NotaDeCreditoDetalleService]
})
export class NotaDeCreditoDetalleModule {}
