import { Module } from '@nestjs/common';
import { PostsService } from './services/posts/posts.service';
import { PostsController } from './controllers/posts/posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/entities/post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post])
  ],
  providers: [PostsService],
  controllers: [PostsController]
})
export class PostsModule {}
