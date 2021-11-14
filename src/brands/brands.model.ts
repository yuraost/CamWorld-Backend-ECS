import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Product} from "../products/products.model";

interface BrandCreationAttrs {
    name: string;
}

@Table({tableName: 'brands'})
export class Brand extends Model<Brand, BrandCreationAttrs> {
    @ApiProperty({example: '1', description: 'Primary key'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Canon', description: 'Brand name'})
    @Column({type: DataType.STRING, allowNull: false, unique: true})
    name: string;

    @HasMany(() => Product, 'brandId')
    products: Product[]
}