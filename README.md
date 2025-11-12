# 📨 Pub/Sub com Kafka + NestJS + MongoDB

Este repositório demonstra na prática o modelo **Pub/Sub (Publisher/Subscriber)** usando **Apache Kafka** como broker, **NestJS** como microserviços e **MongoDB** como base de dados.

---

## 🧠 Conceito

No modelo Pub/Sub:

- **Publisher (Produtor)** envia mensagens para um **tópico** no Kafka.
- **Subscriber (Consumidor)** escuta esse tópico e processa as mensagens.

Este padrão é muito usado em **arquiteturas distribuídas e microserviços**, onde os sistemas precisam se comunicar de forma **assíncrona e escalável**.

---

## ⚙️ Stack utilizada

- 🐳 **Docker Compose** – orquestra todos os serviços
- 🦍 **Zookeeper** – gerencia o Kafka internamente
- 📬 **Kafka Broker** – responsável pela mensageria
- 🧩 **Kafka UI** – painel para visualizar tópicos e mensagens
- 🍃 **MongoDB** – banco para armazenar os dados processados
- 💡 **NestJS** – microserviços Producer e Consumer

---

## 🚀 Subindo o ambiente

```bash
docker-compose up -d
```
