import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Product} from "../products/products.model";

interface CategoryCreationAttrs {
    name: string;
    slug: string;
}

@Table({tableName: 'categories'})
export class Category extends Model<Category, CategoryCreationAttrs> {
    @ApiProperty({example: '1', description: 'Primary key'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Cameras', description: 'Category name'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @ApiProperty({example: 'cameras', description: 'Category slug'})
    @Column({type: DataType.STRING, allowNull: false, unique: true})
    slug: string;

    @HasMany(() => Product, 'categoryId')
    products: Product[]
}