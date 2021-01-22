import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  
  import { TaskService } from './task.service';
  import { CreateTaskDto } from './dto/taskdto';
  
  @Controller('/task')
  export class TaskController {
    constructor(private readonly taskService: TaskService) {}
  
    @Post()
    async addProduct(@Body() createTaskDto: CreateTaskDto) {
      const generatedId = await this.taskService.createTask(createTaskDto);
      console.log("am from controller")
      return { Task: generatedId, message: "succesfully created" };
    }
  
    @Get()
    async getAllTasks() {
      const tasks = await this.taskService.getAllTAsk();
      return tasks;
    }
  
    @Get(':id')
    getProduct(@Param('id') id: string) {
      return this.taskService.getById(id);
    }
  
    // @Patch(':id')
    // async updateProduct(
    //   @Param('id') prodId: string,
    //   @Body('title') prodTitle: string,
    //   @Body('description') prodDesc: string,
    //   @Body('price') prodPrice: number,
    // ) {
    //   await this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
    //   return null;
    // }
  
    // @Delete(':id')
    // async removeProduct(@Param('id') prodId: string) {
    //     await this.productsService.deleteProduct(prodId);
    //     return null;
    // }
  }