import { IPost } from "../../models/interfaces/post/IPost";
import { IPostRepository } from "../../models/interfaces/post/IPostRepository";

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