import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  constructor() {}

  @Get()
  index() {
    return {
      status: 200,
      message: "API is running",
    };
  }
}
