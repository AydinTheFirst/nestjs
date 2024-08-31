import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";

// @GetUser() decorator
export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();
    return request.user;
  }
);
