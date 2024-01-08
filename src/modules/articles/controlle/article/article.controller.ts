import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ArticleDto } from '../../dto/article.dto';
import { ArticleService } from '../../service/article.service';

@Controller('article')
@ApiTags('Articles')
@Controller('article')
export class ArticleController {

    constructor(private readonly articleService: ArticleService) {}

    @Post()
    @ApiOperation({summary: 'registration Articles'})
    @ApiResponse({status: 200, description: 'Successful registration.'})
    @ApiResponse({status: 400, description: 'Request invalid.'})
    @ApiResponse({status: 500, description: 'Internal error.'})
    public create(@Body() article: ArticleDto): string {
        return this.articleService.registerArticle(article);
    }
}
