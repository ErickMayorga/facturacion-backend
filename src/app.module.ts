import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioModule} from "./modelo/usuario/usuario.module";

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
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
