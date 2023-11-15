import { NestFactory } from '@nestjs/core';
import { ProductsModule } from './products.module';
import * as dotenv from 'dotenv';
import * as cors from 'cors';

async function bootstrap() {
  if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: '.env.production' });
  } else {
    dotenv.config();
  }

  const app = await NestFactory.create(ProductsModule);
  app.use(cors());
  await app.listen(3003);
}
bootstrap();
