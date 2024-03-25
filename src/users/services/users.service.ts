import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) 
        private userRepo: Repository<User>,
    ) {}

    findAll(): Promise<User[]> {
        return this.userRepo.find();
    }

    findOne(id: number): Promise<User | null> {
        return this.userRepo.findOneBy({ id });
    }

    async create(newUser: User): Promise<User | null> {
        const hashPassword = await bcrypt.hash(newUser.password, 10);
        newUser.password = hashPassword;
        newUser.createdAt = new Date(); 
        newUser.updatedAt = new Date();
        this.userRepo.create(newUser);
        return this.userRepo.save(newUser);
    }
    
    async update(id, userBody: User) {

        const user = await this.userRepo.findOne(id);
        return this.userRepo.merge(user, userBody);
        
    }

    findByEmail(email: string){
        return this.userRepo.findOne({where: { email }})
    }

    async remove(id: number): Promise<void> {
        await this.userRepo.delete(id);
    }

}
