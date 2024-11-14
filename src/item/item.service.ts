import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class ItemService {

  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) { }

  create(createItemDto: CreateItemDto) {
    return 'This action adds a new item';
  }

  findAll() {
    return `This action returns all item`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }

  findByPrice(price: number) {
    return this.itemRepository.find({
      where: { price: price },
    });
  }
  createBulk(createItemDtos: CreateItemDto[]) {
    const items = this.itemRepository.create(createItemDtos);
    return this.itemRepository.save(items);
  }

  removeBulk(ids: number[]) {
    return this.itemRepository.delete(ids);
  }
}
