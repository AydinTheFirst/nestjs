import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { ZodValidationPipe } from "@/pipes";
import { CreateUserSchema, UpdateUserSchema } from "./users.dto";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async find() {
    return await this.usersService.find();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.usersService.findOne(id);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(CreateUserSchema))
  async create(@Body() body: any) {
    return await this.usersService.create(body);
  }

  @Put(":id")
  @UsePipes(new ZodValidationPipe(UpdateUserSchema))
  async update(@Param("id") id: string, @Body() body: any) {
    return await this.usersService.update(id, body);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return await this.usersService.remove(id);
  }
}
