import { 
    Body, 
    Controller, 
    Get, 
    Post, 
    Put,
    Delete,
    Param, 
    ParseIntPipe, 
    UseGuards,
    SetMetadata
} from '@nestjs/common';

import { Post as PostModel } from "../../../entities/post.entity";
import { PostsService } from 'src/posts/services/posts/posts.service';
import { ApiKeyGuard } from 'src/auth/guards/api-key/api-key.guard';

@UseGuards(ApiKeyGuard)
@Controller('api/posts')
export class PostsController {

    constructor(private readonly postsService: PostsService){}

    @SetMetadata('isPublic', true)
    @Get('/')
    getAll(){
        return this.postsService.findAll();
    }

    @SetMetadata('isPublic', true)
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.postsService.findOne(id);
    }

    @Post('create')
    createPost(@Body() body: PostModel){
        return this.postsService.create(body);
    }

    @Put('update')
    updatePost(@Param('id', ParseIntPipe) id: number, @Body() body: PostModel){
        return this.postsService.update(id, body);
    }

    @UseGuards(ApiKeyGuard)
    @Delete('delete')
    deletePost(@Param('id', ParseIntPipe) id: number) {
        return this.postsService.remove(id);
    }
        
}
