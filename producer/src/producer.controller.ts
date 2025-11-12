/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Controller, Post, Body } from '@nestjs/common';
import { ProducerService } from './producer.service';

@Controller('publish')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @Post()
  async publish(@Body() data: any) {
    await this.producerService.sendMessage(data);
    return { status: 'ok', message: 'Mensagem publicada no Kafka', data };
  }
}
