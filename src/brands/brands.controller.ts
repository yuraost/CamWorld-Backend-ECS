import {Controller, Get, Param} from '@nestjs/common';
import {BrandsService} from "./brands.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import { Brand } from './brands.model';

@ApiTags('Brands')
@Controller('brands')
export class BrandsController {
    constructor(private brandsService: BrandsService) {}

    @ApiOperation({summary: 'Get all brands'})
    @ApiResponse({status: 200, type: [Brand]})
    @Get()
    getAll() {
        return this.brandsService.getAll();
    }

    @ApiOperation({summary: 'Get brand by id'})
    @ApiResponse({status: 200, type: Brand})
    @Get('/:id')
    getById(@Param('id') id: number) {
        return this.brandsService.getById(id);
    }
}
