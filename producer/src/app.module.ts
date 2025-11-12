import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProducerService } from './producer.service';
import { ProducerController } from './producer.controller';

@Module({
  imports: [],
  controllers: [AppController, ProducerController],
  providers: [AppService, ProducerService],
})
export class AppModule {}
