import { Test, TestingModule } from '@nestjs/testing';
import { SuitcaseController } from './suitcase.controller';
import { SuitcaseService } from '../service/suitcase.service';

describe('SuitcaseController', () => {
  let controller: SuitcaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuitcaseController],
      providers: [
        SuitcaseService
      ],
    }).compile();

    controller = module.get<SuitcaseController>(SuitcaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
