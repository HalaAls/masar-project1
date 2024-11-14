import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemService.create(createItemDto);
  }

  @Get()
  findAll() {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemService.update(+id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemService.remove(+id);
  }



  // GET endpoint to find items by a price (or other filters)
  @Get('price/:price')
  findByPrice(@Param('price') price: string) {
    return this.itemService.findByPrice(+price); // Converting price to number
  }

  // POST endpoint to create multiple items
  @Post('bulk')
  createBulk(@Body() createItemDtos: CreateItemDto[]) {
    return this.itemService.createBulk(createItemDtos);
  }

  // DELETE endpoint to remove multiple items by an array of IDs
  @Delete('bulk')
  removeBulk(@Body() ids: number[]) {
    return this.itemService.removeBulk(ids);
  }
}
