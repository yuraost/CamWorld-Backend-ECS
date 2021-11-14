import {Controller, Get, Param} from '@nestjs/common';
import {CategoriesService} from "./categories.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Category} from "./categories.model";

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) {}

    @ApiOperation({summary: 'Get all categories'})
    @ApiResponse({status: 200, type: [Category]})
    @Get()
    getAll() {
        return this.categoriesService.getAllCategories();
    }

    @ApiOperation({summary: 'Get all categories'})
    @ApiResponse({status: 200, type: Category})
    @Get('/:slug')
    getBySlug(@Param('slug') slug: string) {
        return this.categoriesService.getCategoryBySlug(slug);
    }
}
