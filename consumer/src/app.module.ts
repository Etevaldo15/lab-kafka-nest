import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsumerService } from './consumer.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ConsumerService],
})
export class AppModule {}
