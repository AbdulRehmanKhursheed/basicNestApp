import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { usersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly userService: usersService) {}
  @Get()
  getUsers(): any {
    return this.userService.getAllUsers();
  }
  @Get(':id')
  getOneUser(@Param() param): Promise<any> {
    return this.userService.getOneUser(param);
  }

  @Post('create')
  async postUsers(@Body() createUserdto: createUserDto) {
    return this.userService.createNewUser(createUserdto);
  }

  @Delete(':id')
  deleteUser(@Param() param): Promise<any> {
    return this.userService.deleteUser(param);
  }
  @Put(':id')
  updateUser(
    @Body() updateUserDto: createUserDto,
    @Param('id') id,
  ): Promise<any> {
    return this.userService.updateUser(id, updateUserDto);
  }
}
