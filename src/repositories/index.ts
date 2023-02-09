import { PostPrisma } from "./PostPrisma";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const postRepository = new PostPrisma(prisma);