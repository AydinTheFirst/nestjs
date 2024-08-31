import { PipeTransform, BadRequestException } from "@nestjs/common";
import { ZodSchema } from "zod";

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown) {
    const parsedValue = this.schema.safeParse(value);

    if (parsedValue.error) {
      throw new BadRequestException("Validation failed", {
        description: JSON.stringify(parsedValue.error.errors),
      });
    }

    return parsedValue.data;
  }
}
