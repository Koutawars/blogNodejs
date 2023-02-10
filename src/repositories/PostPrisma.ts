import { IPost } from "../models/interfaces/post/IPost";
import { IPostRepository } from "../models/interfaces/post/IPostRepository";
import { PrismaClient } from '@prisma/client'


export class PostPrisma implements IPostRepository {
    constructor (private prisma: PrismaClient) {}
    findOne(id: number): Promise<IPost> {
        return this.prisma.post.findUnique({
            where: { id }
        });
    }
    findAll(): Promise<IPost[]> {
        return this.prisma.post.findMany();
    }
    create(data: IPost): Promise<IPost> {
        return this.prisma.post.create({ 
            data
        });
    }
    update(id: number, data: IPost): Promise<IPost> {
        return this.prisma.post.update({
            where: { id },
            data
        });
    }
    delete(id: number): Promise<IPost> {
        return this.prisma.post.delete({
            where: { id }
        });
    }
}