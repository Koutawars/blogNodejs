import { PostPrisma } from "./PostPrisma";
import { PrismaClient } from '@prisma/client';
import { UserPrisma } from "./UserPrisma";

const prisma = new PrismaClient();

export const postRepository = new PostPrisma(prisma);
export const userRepository = new UserPrisma(prisma);