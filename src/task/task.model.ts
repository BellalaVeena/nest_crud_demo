import * as mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';






export const TaskSchema = new mongoose.Schema({
  _id:{ type: String, default: uuidv4 },
  title: { type: String, required: true },
  description: { type: String, required: true },
  });

export interface Task extends mongoose.Document {
  
  title: string;
  description: string;
  
}