import { Module } from '@nestjs/common';
import { DestinatarioController } from './destinatario.controller';
import { DestinatarioService } from './destinatario.service';

@Module({
  controllers: [DestinatarioController],
  providers: [DestinatarioService]
})
export class DestinatarioModule {}
