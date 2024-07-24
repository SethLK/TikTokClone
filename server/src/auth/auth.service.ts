import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

import { UserDocument } from 'src/schemas/user.schema';
import { UserType } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user: UserDocument = await this.usersService.findByEmail(email);
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user.toObject();
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { payload: user._id, username: user.username, email: user.email};
    return {
      message: 'Login successful',
      access_token: this.jwtService.sign(payload),
      _id : user._id
    };
  }

  async register(user: UserType) {
    const newUser = await this.usersService.create(user);
    const { password, ...result } = newUser.toObject();
    const token = await this.login(result);
    return {
      message: 'Register successful',
      ...token,
    };
  }

}