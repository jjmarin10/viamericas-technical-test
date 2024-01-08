import { Module } from '@nestjs/common';
import { SuitcaseController } from './controller/suitcase.controller';
import { SuitcaseService } from './service/suitcase.service';

@Module({
  controllers: [SuitcaseController],
  providers: [SuitcaseService],
})
export class SuitcaseModule {}
