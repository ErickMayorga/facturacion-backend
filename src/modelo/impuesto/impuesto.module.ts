import { Module } from '@nestjs/common';
import { ImpuestoController } from './impuesto.controller';
import { ImpuestoService } from './impuesto.service';

@Module({
  controllers: [ImpuestoController],
  providers: [ImpuestoService]
})
export class ImpuestoModule {}
