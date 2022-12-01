import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { createUserDto } from './dto/create-user.dto';
@Injectable()
export class usersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  getAllUsers(): any {
    return this.userModel.find().exec();
  }
  createNewUser(user: createUserDto): any {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }
  async getOneUser(params: any) {
    let { id } = params;
    let result = await this.userModel.findOne({ _id: id });
    await this.userModel.findOne({ _id: id });
    if (result) {
      return result;
    } else {
      return 'User not found';
    }
  }
  async deleteUser(params: any) {
    let { id } = params;
    return await this.userModel.findByIdAndRemove(id);
  }
  async updateUser(params: any, user: any) {
    return await this.userModel.findByIdAndUpdate(params, user, { new: true });
  }
}
