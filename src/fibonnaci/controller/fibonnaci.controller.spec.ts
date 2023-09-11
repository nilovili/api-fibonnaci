import { Test, TestingModule } from '@nestjs/testing';
import { FibonnaciController } from './fibonnaci.controller';

describe('FibonnaciController', () => {
  let controller: FibonnaciController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FibonnaciController],
    }).compile();

    controller = module.get<FibonnaciController>(FibonnaciController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
