import { ErrorHttp } from "../models/Class/ErrorHttp";
import { IPost } from "../models/interfaces/post/IPost";
import { IPostRepository } from "../models/interfaces/post/IPostRepository";

export type IUpdatePostByIdUsecase = (data:IPost, id: number) => Promise<IPost>;

export const buildUpdatePostById = ({
    postRepository
}: {
    postRepository: IPostRepository
}): IUpdatePostByIdUsecase => {
    return async (data:IPost, id: number) => {
        const post = await postRepository.findOne(id);
        if(post === null) {
            throw new ErrorHttp(404, "Post not found");
        }
        return await postRepository.update(id, data);;
    }
}
