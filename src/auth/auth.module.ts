import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';

import { UsersModule} from './../users/users.module';


@Module({})
export class AuthModule {}
