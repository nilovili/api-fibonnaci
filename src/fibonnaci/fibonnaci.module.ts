import { Module } from '@nestjs/common';
import { FibonnaciController } from './controller/fibonnaci.controller';
import { FibonnaciService } from './service/fibonnaci.service';

@Module({
  controllers: [FibonnaciController],
  providers: [FibonnaciService],
})
export class FibonnaciModule {}
