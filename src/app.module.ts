import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuitcaseModule } from './modules/suitcases/suitcase.module';
import { ArticleModule } from './modules/articles/article.module';

@Module({
  imports: [SuitcaseModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
