import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdatePaymentDto } from './dto/update-category.dts';


@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private categoryRepository: Repository<Category>, ) {}

  
  async create(createCategoryDto: CreateCategoryDto){
    const category = this.categoryRepository.create(createCategoryDto);
    const cat = this.categoryRepository.save(category);
    return cat;
  }

  async findAll() {
    return this.categoryRepository.find();
  }

  
  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
