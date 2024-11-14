/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  NotFoundException,
  Param,
  Post,
  Put,

} from '@nestjs/common';
import { UserService } from './user/user.service';
import { CreateUserDto } from './user/dto/create-user.dto';
import { User } from './user/entities/user.entity';
import { UpdateUserDto } from './user/dto/update-user.dto';
// import { UpdateUserDto } from './user/dto/update-user.dto';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) { }

  // Create a new user
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    try {
      return await this.userService.createUser(createUserDto);
    } catch (error) {
      throw new HttpException('Error creating user', 400);
    }
  }

  // Find all users
  @Get()
  async findAll(): Promise<User[]> {
    try {
      return await this.userService.find();
    } catch (error) {
      throw new HttpException('Error retrieving users', 400);
    }
  }

  // Find a user by ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    try {
      const user = await this.userService.findUser(id);
      if (!user) {
        throw new HttpException('User not found', 404);
      }
      return user;
    } catch (error) {
      throw new HttpException('Error retrieving user', 400);
    }
  }



  @Put(':id')
  async update(id: number, updateUserDetails: UpdateUserDto): Promise<User> {
    // Perform the update
    await this.userService.update(id, { ...updateUserDetails });

    // Retrieve and return the updated user
    const updatedUser = await this.userService.findUser(id);
    if (!updatedUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return updatedUser;
  }
  // Remove a user by ID
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    try {
      await this.userService.delete(id);
    } catch (error) {
      throw new HttpException('Error deleting user', 400);
    }
  }
}
