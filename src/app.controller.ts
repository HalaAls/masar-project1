import { Controller, Get, Post, Put, Delete, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/get-data')
  getData(): any {
    return {
      uniId: '1',
      name: 'Hala',
      major: 'CSE',
    };
  }

  @Post('/post-data')
  postData(
    @Query('uniId') uniId: number,
    @Query('name') name: string,
    @Query('major') major: string,
  ) {
    return {
      uniId: uniId,
      name: name,
      major: major,
    };
  }

  @Put('/put-data')
  putData(): string {
    return 'put';
  }

  @Delete('/delete-data')
  deleteData(): string {
    return 'delete';
  }

  
}
