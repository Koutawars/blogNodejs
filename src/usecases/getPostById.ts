import { ErrorHttp } from "../models/Class/ErrorHttp";
import { IPost } from "../models/interfaces/IPost";
import { IPostRepository } from "../models/interfaces/IPostRepository";

export type IGetPostByIdUsecase = (id: number) => Promise<IPost>;

export const buildGetPostById = ({
    postRepository
}: {
    postRepository: IPostRepository
}): IGetPostByIdUsecase => {
    return async (id: number) => {
        const post = await postRepository.findOne(id);
        if(post === null) {
            throw new ErrorHttp(404, "Post not found");
        }
        return post;
    }
}
