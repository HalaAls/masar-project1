import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
<<<<<<< HEAD
import { CategoriesModule } from './categories/categories.module';
=======
import { User } from './user/entities/user.entity';
import { ItemModule } from './item/item.module';
import { Item } from './item/entities/item.entity';
>>>>>>> 6effed476aba6a808fb890a35e9cb135b9bc4713

const entitiesPath = __dirname + '/**/*.entity{.ts,.js}';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'masar-db',
<<<<<<< HEAD
      entities: [entitiesPath],
      autoLoadEntities: true,
      synchronize: false,
      logging: false,
    }),
    UserModule,
    CategoriesModule,
=======
      autoLoadEntities: true,
      entities: [entitiesPath, User, Item],
      synchronize: true,
      logging: false,
    }),
    UserModule,
    ItemModule,
>>>>>>> 6effed476aba6a808fb890a35e9cb135b9bc4713
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule { }
