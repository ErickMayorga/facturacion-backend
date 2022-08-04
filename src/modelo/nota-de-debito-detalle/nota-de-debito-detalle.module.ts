import { Module } from '@nestjs/common';
import { NotaDeDebitoDetalleController } from './nota-de-debito-detalle.controller';
import { NotaDeDebitoDetalleService } from './nota-de-debito-detalle.service';

@Module({
  controllers: [NotaDeDebitoDetalleController],
  providers: [NotaDeDebitoDetalleService]
})
export class NotaDeDebitoDetalleModule {}
