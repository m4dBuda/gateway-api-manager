import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import { UsersModule } from './users.module';

async function bootstrap() {
  if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: '.env.production' });
  } else {
    dotenv.config();
  }

  const app = await NestFactory.create(UsersModule);
  app.use(cors());
  await app.listen(3003);
}
bootstrap();
