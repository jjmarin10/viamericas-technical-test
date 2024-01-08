import { Module } from '@nestjs/common';
import { ArticleService } from './service/article.service';
import { ArticleController } from './controlle/article/article.controller';


@Module({
  providers: [ArticleService],
  controllers: [ArticleController]
})
export class ArticleModule {}
