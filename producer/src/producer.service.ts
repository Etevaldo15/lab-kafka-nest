import { Injectable } from '@nestjs/common';
import { Kafka } from 'kafkajs';

@Injectable()
export class ProducerService {
  private kafka = new Kafka({ brokers: ['localhost:9092'] });
  private producer = this.kafka.producer();

  async sendMessage(message: any) {
    await this.producer.connect();
    await this.producer.send({
      topic: 'orders',
      messages: [{ value: JSON.stringify(message) }],
    });
    await this.producer.disconnect();
  }
}
