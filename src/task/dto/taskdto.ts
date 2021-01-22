import { IsNotEmpty } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
 
}