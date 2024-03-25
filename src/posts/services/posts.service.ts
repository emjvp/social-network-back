import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/entities/post.entity';
import { Repository } from 'typeorm';


@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(Post) 
        private postRepo: Repository<Post>,
    ) {}

    findAll(): Promise<Post[]> {
        return this.postRepo.find();
    }

    findOne(id: number): Promise<Post | null> {
        return this.postRepo.findOneBy({ id });
    }

    create(postBody: Post): Post {
        return this.postRepo.create(postBody);
    }

    async update(id, postBody: Post) {

        const post = await this.postRepo.findOne(id);
        return this.postRepo.merge(post, postBody);
        
    }

    async remove(id: number): Promise<void> {
        await this.postRepo.delete(id);
    }

}
