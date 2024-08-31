import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  UsePipes,
} from "@nestjs/common";
import { User } from "@prisma/client";
import { AuthService } from "./auth.service";
import { ZodValidationPipe } from "@/pipes";
import { GetUser } from "@/decorators";
import { AuthGuard } from "@/guards";
import { LoginDto, LoginSchema, RegisterDto, RegisterSchema } from "./auth.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get("me")
  @UseGuards(AuthGuard)
  me(@GetUser() user: User) {
    return user;
  }

  @HttpCode(HttpStatus.OK)
  @Post("login")
  @UsePipes(new ZodValidationPipe(LoginSchema))
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }

  @HttpCode(HttpStatus.OK)
  @Post("register")
  @UsePipes(new ZodValidationPipe(RegisterSchema))
  register(@Body() body: RegisterDto) {
    return this.authService.register(body);
  }
}
