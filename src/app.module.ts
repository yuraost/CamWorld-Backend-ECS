import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import {User} from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { BrandsModule } from './brands/brands.module';
import {Category} from "./categories/categories.model";
import {Product} from "./products/products.model";
import {Brand} from "./brands/brands.model";

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Role, UserRoles, Category, Brand, Product],
      autoLoadModels: true
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    ProductsModule,
    CategoriesModule,
    BrandsModule,
  ],
})
export class AppModule {}
