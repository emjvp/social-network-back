import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe, Put } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('api/users')
export class UsersController {

    constructor(private readonly userService: UsersService){}

    @Get('/')
    getAll(){
        return this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findOne(id);
    }

    @Post('create')
    createPost(@Body() body: User){
        return this.userService.create(body);
    }

    @Put('update')
    updatePost(@Param('id', ParseIntPipe) id: number, @Body() body: User){
        return this.userService.update(id, body);
    }

    @Delete('delete')
    deletePost(@Param('id', ParseIntPipe) id: number) {
        return this.userService.remove(id);
    }
}
