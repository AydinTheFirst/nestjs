import { Injectable } from "@nestjs/common";
import { PrismaService } from "@/prisma";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  find = async () => {
    return await this.prisma.user.findMany();
  };

  findOne = async (id: string) => {
    return await this.prisma.user.findFirst({ where: { id } });
  };

  create = async (data: any) => {
    return await this.prisma.user.create({ data });
  };

  update = async (id: string, data: any) => {
    return await this.prisma.user.update({ where: { id }, data });
  };

  remove = async (id: string) => {
    return await this.prisma.user.delete({ where: { id } });
  };
}
