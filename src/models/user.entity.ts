import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


// TODO: relación de los posts del usuario
@Entity()
export class UserEntity {

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

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @Column()
    deletedAt: Date;
    
  }
