import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Post} from './post.entity';


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    fullName: string;
  
    @Column()
    age: number;

    @Column()
    email: string;
  
    @Column()
    password: string;

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[];

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @Column({nullable: true})
    deletedAt: Date;
    
  }
