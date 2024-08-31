import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "@/prisma";

@Injectable()
export class TokensService {
  constructor(private prisma: PrismaService) {}

  async find(user: User) {
    return await this.prisma.token.findMany({
      where: {
        userId: user.id,
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.token.findFirst({
      where: {
        id,
      },
    });
  }

  async create(user: User) {
    const token = await this.prisma.token.create({
      data: {
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
        userId: user.id,
      },
    });

    return token;
  }

  async delete(id: string) {
    return await this.prisma.token.delete({
      where: {
        id,
      },
    });
  }
}
