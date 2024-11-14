/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }
    @Get('/get-user')
    getUser() { 
        return this.userService.findUser();
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) { 
       return this.userService.createUser(createUserDto);

    }  
    
    @Put(':id')
    update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) { 
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) { 
        return this.userService.delete(id);
    }
}

export { UserService };

