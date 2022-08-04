import { Module } from '@nestjs/common';
import { GuiaDeRemisionController } from './guia-de-remision.controller';
import { GuiaDeRemisionService } from './guia-de-remision.service';

@Module({
  controllers: [GuiaDeRemisionController],
  providers: [GuiaDeRemisionService]
})
export class GuiaDeRemisionModule {}
