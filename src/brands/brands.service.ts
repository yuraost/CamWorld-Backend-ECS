import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Brand} from "./brands.model";

@Injectable()
export class BrandsService {
    constructor(@InjectModel(Brand) private brandRepository: typeof Brand) {}

    async getAll() {
        return await this.brandRepository.findAll()
    }

    async getById(id: number) {
        return await this.brandRepository.findOne({where: {id}, include: {all: true}})
    }
}
