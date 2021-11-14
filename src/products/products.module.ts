import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Product} from "./products.model";
import {Brand} from "../brands/brands.model";
import {Category} from "../categories/categories.model";

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  exports: [ProductsService],
  imports: [
    SequelizeModule.forFeature([Product, Brand, Category])
  ]
})
export class ProductsModule {}
