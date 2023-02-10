import { CreatePostDto } from "../models/Class/dto/Post/CreatePost";
import { IPost } from "../models/interfaces/post/IPost";
import { IPostRepository } from "../models/interfaces/post/IPostRepository";

export type ICreatePostUsecase = (data: CreatePostDto) => Promise<IPost>;

export const buildCreatePost = ({
    postRepository
}: {
    postRepository: IPostRepository
}): ICreatePostUsecase => {
    return async (data: CreatePostDto) => {
        data.verify();
        return await postRepository.create({ ...data });
    }
}
