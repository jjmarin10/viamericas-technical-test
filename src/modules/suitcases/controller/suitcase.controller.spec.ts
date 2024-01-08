import { Test, TestingModule } from '@nestjs/testing';
import { SuitcaseController } from './suitcase.controller';

describe('SuitcaseController', () => {
  let controller: SuitcaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuitcaseController],
    }).compile();

    controller = module.get<SuitcaseController>(SuitcaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
