import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Product} from "./products.model";
import {Sequelize} from "sequelize-typescript";

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product) private productRepository: typeof Product) {}

    async getAll() {
        return await this.productRepository.findAll({include: {all: true}})
    }

    async orderProducts(categoryId: number, orderBy: string) {
        let order
        if (orderBy === 'date-desc') {
            order = [
                ['createdAt', 'DESC'],
            ]
        } else if (orderBy === 'low_to_high') {
            order = [
                ['price', 'ASC'],
            ]
        } else if (orderBy === 'high_to_low') {
            order = [
                ['price', 'DESC'],
            ]
        } else {
            order = [
                ['createdAt', 'DESC'],
            ]
        }
        return await this.productRepository.findAll({
            order,
            where: {categoryId},
            include: {all: true}
        })
    }

    async limitProducts(limit:number, offset:number) {
        return await  this.productRepository.findAll({
            limit: limit,
            offset: offset,
            order: [
                Sequelize.fn( 'RANDOM' ),
            ]
        })
    }
}
