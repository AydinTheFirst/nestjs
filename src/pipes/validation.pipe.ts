import { PipeTransform, HttpException, HttpStatus } from "@nestjs/common";
import { ZodSchema } from "zod";

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown) {
    const parsedValue = this.schema.safeParse(value);

    if (parsedValue.error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: "Validation Error",
          data: parsedValue.error.errors,
        },
        HttpStatus.BAD_REQUEST
      );
    }

    return parsedValue.data;
  }
}
