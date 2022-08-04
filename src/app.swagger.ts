import {INestApplication} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

export const initSwagger = (app: INestApplication) => {
    const swaggerConfig = new DocumentBuilder()
        .setTitle('API Facturación')
        .setDescription('API del módulo de Facturación para TIC-EPN. Desarrollado por Erick Mayorga')
        .build()
    const document = SwaggerModule.createDocument(app, swaggerConfig)
    SwaggerModule.setup('/docs', app, document)
}