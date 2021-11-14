import { Module } from '@nestjs/common';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Brand} from "./brands.model";

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  exports: [BrandsService],
  imports: [
    SequelizeModule.forFeature([Brand])
  ],
})
export class BrandsModule {}
