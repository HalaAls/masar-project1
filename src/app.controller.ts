import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entities';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Create a new user
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    try {
      return await this.userService.create(createUserDto);
    } catch (error) {
      throw new HttpException('Error creating user', 400);
    }
  }

  // Find all users
  @Get()
  async findAll(): Promise<User[]> {
    try {
      return await this.userService.findAll();
    } catch (error) {
      throw new HttpException('Error retrieving users', 400);
    }
  }

  // Find a user by ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    try {
      const user = await this.userService.findOne(id);
      if (!user) {
        throw new HttpException('User not found', 404);
      }
      return user;
    } catch (error) {
      throw new HttpException('Error retrieving user', 400);
    }
  }

  // Update a user by ID
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    try {
      const updatedUser = await this.userService.update(id, updateUserDto);
      return updatedUser;
    } catch (error) {
      throw new HttpException('Error updating user', 400);
    }
  }

  // Remove a user by ID
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    try {
      await this.userService.remove(id);
    } catch (error) {
      throw new HttpException('Error deleting user', 400);
    }
  }
}
