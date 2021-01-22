import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
    ValidationPipe,
    UsePipes
  } from '@nestjs/common';
  
  import { UserService } from './user.service';
  import { CreateUserDto } from './dto/userdto';
  
  @UsePipes()
  @Controller('/signup')
  
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    @Post()
    async addProduct(@Body(ValidationPipe) createUserDto: CreateUserDto) {
      const generatedId = await  this.userService.signup(createUserDto);
      console.log("am from controller")
      return {  message: generatedId };
    }
}
  
    