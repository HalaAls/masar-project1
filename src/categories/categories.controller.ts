import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
 create(@Body() createCategoryDto: CreateCategoryDto){
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  async findAll(){
    return this.categoriesService.findAll();
  }
}
