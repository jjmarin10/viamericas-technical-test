import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  // swagger configuration
  const config = new DocumentBuilder()
    .setTitle('WOL AIRLINES')
    .setDescription('The airline API description')
    .setVersion('1.0')
    .addTag('airline')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(configService.get('PORT',3000));
}
bootstrap();
