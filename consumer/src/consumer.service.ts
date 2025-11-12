/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka } from 'kafkajs';
import { MongoClient } from 'mongodb';

@Injectable()
export class ConsumerService implements OnModuleInit {
  private kafka = new Kafka({
    brokers: ['localhost:9092'],
  });

  private consumer = this.kafka.consumer({ groupId: 'orders-group' });
  private mongo = new MongoClient('mongodb://admin:admin123@localhost:27017');

  async onModuleInit() {
    await this.consumer.connect();
    await this.mongo.connect();

    const db = this.mongo.db('ordersDB');
    const collection = db.collection('orders');

    await this.consumer.subscribe({ topic: 'orders' });

    await this.consumer.run({
      eachMessage: async ({ message }) => {
        if (!message.value) {
          console.warn('Mensagem sem valor recebido, ignorando.!');
          return;
        }
        const data = JSON.parse(message?.value.toString());
        await collection.insertOne(data);
        console.log('💾 Pedido salvo no MongoDB:', data);
      },
    });
  }
}
