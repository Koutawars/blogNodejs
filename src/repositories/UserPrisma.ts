import { PrismaClient } from "@prisma/client";
import { IUser } from "../models/interfaces/user/IUser";
import { IUserRepository } from "../models/interfaces/user/IUserRepository";

export class UserPrisma implements IUserRepository {
    constructor (private prisma: PrismaClient) {}
    create(data: IUser): Promise<IUser> {
        return this.prisma.user.create({
            data
        });
    }
    findByEmail(email: string): Promise<IUser> {
        return this.prisma.user.findUnique({
            where: { email }
        });
    }

    findByEmailOrUsename(email: string, username: string): Promise<IUser> {
        return this.prisma.user.findFirst({
            where: {
                OR: [ { email }, { username } ]
            }
        });
    }
}