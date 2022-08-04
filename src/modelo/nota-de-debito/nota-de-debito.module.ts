import { Module } from '@nestjs/common';
import { NotaDeDebitoController } from './nota-de-debito.controller';
import { NotaDeDebitoService } from './nota-de-debito.service';

@Module({
  controllers: [NotaDeDebitoController],
  providers: [NotaDeDebitoService]
})
export class NotaDeDebitoModule {}
