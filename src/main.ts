import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { corsOption } from './shared/options/cors.option';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.enableCors(corsOption);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));
  // SWAGGER
  const configg = new DocumentBuilder()
    .setTitle('Advert App')
    .setDescription('Advert CRUD')
    .setVersion('0.0.1')
    .addTag('Advert')
    .build();
  const document = SwaggerModule.createDocument(app, configg);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(config.get('PORT'), () => {
    console.log(`Port : ${config.get('PORT')} with start `);
  });
}
bootstrap();
