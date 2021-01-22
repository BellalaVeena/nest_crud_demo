import * as mongoose from 'mongoose';
import bcrypt from "bcrypt"

export const UserSchema = new mongoose.Schema({
 
  email: { type: String },
  password: { type: String },
 
});

//   UserSchema.pre<User>('save', async function (next) {
//     let hashpassword = await  bcrypt.hash(this.password, 10);
//     console.log(" hashed password from the model", hashpassword)
//     this.password = hashpassword;
//     next();
// })

export interface User extends mongoose.Document {
  email: string;
  password: string;
}


  