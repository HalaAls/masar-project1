/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';
import { Repository } from 'typeorm';
import { CreateUserParams, UpdateUserParams } from './utils/types';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }
  createUser(userDetails: CreateUserParams) {
    const newUser = this.userRepository.create({ ...userDetails });
    return this.userRepository.save(newUser);
  }

  findUser() {
    return this.userRepository.find();
  }

  update(id: number, updateUserDetails: UpdateUserParams) {  
    return this.userRepository.update({ id }, {...updateUserDetails});
  }

  delete(id: number) {
    return this.userRepository.delete({id});
      }
}
