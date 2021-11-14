import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Category} from "../categories/categories.model";
import {Brand} from "../brands/brands.model";

interface ProductCreationAttrs {
    name: string;
    slug: string;
    image: string;
    sku: string;
    price: number;
    categoryId: number;
    brandId: number;
}

@Table({tableName: 'products'})
export class Product extends Model<Product, ProductCreationAttrs> {
    @ApiProperty({example: '1', description: 'Primary key'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Nikon D610', description: 'Product name'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @ApiProperty({example: 'nikon-d610', description: 'Product slug'})
    @Column({type: DataType.STRING, allowNull: false, unique: true})
    slug: string;

    @ApiProperty({example: '/uploads/products/D610-1.png', description: 'Image url'})
    @Column({type: DataType.STRING, allowNull: false})
    image: string;

    @ApiProperty({example: '122YRT55', description: 'Product sku'})
    @Column({type: DataType.STRING, allowNull: false})
    sku: string;

    @ApiProperty({example: '887', description: 'Product price'})
    @Column({type: DataType.FLOAT, allowNull: false})
    price: number;

    @ApiProperty({example: '1', description: 'Category id'})
    @ForeignKey(() => Category)
    @Column({type: DataType.INTEGER})
    categoryId: number;

    @ApiProperty({example: '1', description: 'Brand id'})
    @ForeignKey(() => Brand)
    @Column({type: DataType.INTEGER})
    brandId: number;

    @ApiProperty({example: '5', description: 'Product rating'})
    @Column({type: DataType.INTEGER, allowNull: true})
    rating: number;

    @ApiProperty({example: '1', description: 'Count reviews'})
    @Column({type: DataType.INTEGER, allowNull: true})
    numReviews: number;

    @BelongsTo(() => Category)
    category: Category

    @BelongsTo(() => Brand)
    brand: Brand
}