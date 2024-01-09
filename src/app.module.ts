import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuitcaseModule } from './modules/suitcases/suitcase.module';
import { ArticleModule } from './modules/articles/article.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [SuitcaseModule, ArticleModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
