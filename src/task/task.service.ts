import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/taskdto';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class TaskService {
  constructor(@InjectModel("Task") private taskModel: Model<Task>) {}

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const {title,description}=createTaskDto
    
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  async getAllTAsk(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }
  async getById(id){
    return this.taskModel.findById(id)
  }
}
