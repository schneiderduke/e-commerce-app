import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductSchema } from './product/product.model';
import { ProductsModule } from './product/products.module';
import { ApiController } from './api/api.controller';
import { ApiService } from './api/api.service';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb://localhost/nest')
  ],
  controllers: [AppController, ApiController],
  providers: [AppService, ApiService],
})
export class AppModule { }
