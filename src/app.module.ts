import { Module } from '@nestjs/common';
import { FibonnaciModule } from './fibonnaci/fibonnaci.module';

@Module({
  imports: [FibonnaciModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
