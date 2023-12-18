import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(
        @Body() createUserDto: CreateUserDto
    ) {
        return await this.userService.createUser(createUserDto);
    }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return await this.userService.getAllUsers();
    }
}
