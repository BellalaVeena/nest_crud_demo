// import { Model } from 'mongoose';
// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { User } from './user.model';
// import { CreateUserDto } from './dto/userdto';
// import { JwtService } from '@nestjs/jwt';



// @Injectable()
// export class UserService {
//   constructor(@InjectModel("User") 
//                 private jwtService: JwtService,
//                 private userModel: Model<User>
//   ) {}

//   async checkEmail(email){
//       console.log("email from check mail method",email)
//       return this.userModel.findOne({email})
//     }
   

//   async signup(createUserDto: CreateUserDto): Promise<any> {
//       console.log("mail from the signup",createUserDto.email)
//     const emailExists= await this.checkEmail(createUserDto.email)
//     console.log("email exists or not",emailExists)
//     if(emailExists){
//         return {message:"user alreay exsits"}
//     }
//     else{
    
//     const {email,password}=createUserDto
    
//     const createdTask =    new this.userModel(createUserDto);
//     console.log("payload which we are sending",createUserDto)
//        await createdTask.save();
//     return {message:"user registered successfully"}}
    
//   }








// //   async validateUser(createUserDto): Promise<any> {
// //     const user = await this.userModel.findOne(createUserDto.email);
// //     if (user && user.password === createUserDto.password) {
// //       const { password, ...result } = user;
// //       return result;
// //     }
// //     return null;
// //   }

// //   async login(createUserDto: any) {
// //     const payload = { email:createUserDto.email, password:createUserDto.password };
// //     return {
// //       access_token: this.jwtService.sign(payload),
// //     };
// //   }
// // }
// }


