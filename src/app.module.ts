import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './models/user.entity';
import { PostEntity } from './models/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Tipo de base de datos
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'database_name',
      entities: [UserEntity, PostEntity], // Entidades (modelos)
      synchronize: true, // Sincronizar esquemas con la base de datos (solo para desarrollo)
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
