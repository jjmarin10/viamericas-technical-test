import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SuitcaseService } from '../service/suitcase.service';
import { SuitcaseDto } from '../dto/suitcase.dto';

@Controller('suitcase')
@ApiTags('Suitcases')
@Controller('api/suitcase')
export class SuitcaseController {

    constructor(private readonly suitcaseService: SuitcaseService) {}

    @Post()
    @ApiOperation({summary: 'registration suitcase'})
    @ApiResponse({status: 200, description: 'Successful registration.'})
    @ApiResponse({status: 400, description: 'Request invalid.'})
    @ApiResponse({status: 500, description: 'Internal error.'})
    public create(@Body() suitcase: SuitcaseDto): string {
        return this.suitcaseService.registerSuitcase(suitcase);
    }
}
