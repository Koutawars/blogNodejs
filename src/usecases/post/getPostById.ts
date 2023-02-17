import { ErrorHttp } from "../../models/Class/ErrorHttp";
import { IPost } from "../../models/interfaces/post/IPost";
import { IPostRepository } from "../../models/interfaces/post/IPostRepository";

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
