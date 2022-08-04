import { Module } from '@nestjs/common';
import { NotaDeCreditoController } from './nota-de-credito.controller';
import { NotaDeCreditoService } from './nota-de-credito.service';

@Module({
  controllers: [NotaDeCreditoController],
  providers: [NotaDeCreditoService]
})
export class NotaDeCreditoModule {}
