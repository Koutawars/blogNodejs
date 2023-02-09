import { IPost } from "../models/interfaces/IPost";
import { IPostRepository } from "../models/interfaces/IPostRepository";
import { PrismaClient } from '@prisma/client'


export class PostPrisma implements IPostRepository {
    constructor (private prisma: PrismaClient) {}
    findOne(id: number): Promise<IPost> {
        return this.prisma.post.findUnique({
            where: {
                id: id
            }
        });
    }
    findAll(): Promise<IPost[]> {
        return this.prisma.post.findMany();
    }
}