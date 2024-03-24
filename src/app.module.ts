import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports:
  [
    TypeOrmModule.forRoot({
      type: 'postgres', // Tipo de base de datos
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'social_network_inlaze',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false, // Sincronizar esquemas con la base de datos (solo para desarrollo)
      retryDelay: 3000,
      retryAttempts: 10
    }),
    UsersModule,
    PostsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
