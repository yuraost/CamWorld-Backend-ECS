import {Controller, Get, Param} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {ProductsService} from "./products.service";
import {Product} from './products.model';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {
    }

    @ApiOperation({summary: 'Get all products'})
    @ApiResponse({status: 200, type: [Product]})
    @Get()
    getAll() {
        return this.productsService.getAll()
    }

    @ApiOperation({summary: 'Filter products'})
    @ApiResponse({status: 200, type: [Product]})
    @Get('order/:categoryId/:orderBy')
    getOrderProducts(@Param('categoryId') categoryId: number, @Param('orderBy') orderBy: string) {
        return this.productsService.orderProducts(categoryId, orderBy)
    }

    @ApiOperation({summary: 'Limit/Offset products'})
    @ApiResponse({status: 200, type: [Product]})
    @Get('limit/:limit/:offset')
    limitProducts(@Param('limit') limit: number,@Param('offset') offset: number) {
        return this.productsService.limitProducts(limit, offset)
    }
}
