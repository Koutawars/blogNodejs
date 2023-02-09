import { IPost } from "../models/interfaces/IPost";
import { IPostRepository } from "../models/interfaces/IPostRepository";

export type IGetPostsUsecase = () => Promise<IPost[]>;

export const buildGetPosts = ({ 
    postRepository 
}:{ 
    postRepository: IPostRepository 
}): IGetPostsUsecase => {
    return async () => {
        const posts = await postRepository.findAll();
        return posts;
    }
}