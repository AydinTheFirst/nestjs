import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/routes/app";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: "*",
    },
  });

  const config = new DocumentBuilder()
    .setTitle("API EXAMPLE")
    .setDescription("The API description")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("swagger", app, document);

  await app.listen(3000);
}
bootstrap();
