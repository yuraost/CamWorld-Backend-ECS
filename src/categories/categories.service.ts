import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Category} from "./categories.model";
import {where} from "sequelize";

@Injectable()
export class CategoriesService {
    constructor(@InjectModel(Category) private categoryRepository: typeof Category) {}

    async getAllCategories() {
        return await this.categoryRepository.findAll()
    }

    async getCategoryBySlug(slug: string) {
        return await this.categoryRepository.findOne({where: {slug}, include: {all: true}})
    }
}
