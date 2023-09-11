import { Test, TestingModule } from '@nestjs/testing';
import { FibonnaciService } from './fibonnaci.service';

describe('FibonnaciService', () => {
  let service: FibonnaciService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FibonnaciService],
    }).compile();

    service = module.get<FibonnaciService>(FibonnaciService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
