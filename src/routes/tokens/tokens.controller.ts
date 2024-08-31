import { Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { TokensService } from "./tokens.service";
import { GetUser } from "@/decorators";
import { User } from "@prisma/client";

@Controller("tokens")
export class TokensController {
  constructor(private tokensService: TokensService) {}

  @Get()
  async find(@GetUser() user: User) {
    return await this.tokensService.find(user);
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.tokensService.findOne(id);
  }

  @Post()
  async create(@GetUser() user: User) {
    return await this.tokensService.create(user);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return await this.tokensService.delete(id);
  }
}
