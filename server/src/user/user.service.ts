import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import * as bcrypt from "bcryptjs"

export type UserType = {
    payload: any;
    _id: string;
    username: string;
    email: string;
    password: string;
  };

@Injectable()
export class UserService {
    constructor (@InjectModel(User.name) private userModel: Model<User>){}

    async create(user: UserType): Promise<UserDocument>{
        const { username, email, password } = user;
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new this.userModel({
            username,
            email,
            password: hashedPassword,
        })

        return newUser.save()
    }

    async findByEmail(email: string): Promise<UserDocument | undefined>{
        const user = await this.userModel.findOne({ email }).exec();
        return user;
    }

    async findByUsername(username: string): Promise<UserDocument | undefined >{
        return this.userModel.findOne({ username }).exec()
    }

    async userExists(email: string, username: string): Promise<boolean>{
        const userFindByEmail = await this.findByEmail(email);
        const userFindByUsername = await this.findByUsername(username);
        return !!userFindByEmail || !!userFindByUsername;
    }


}
