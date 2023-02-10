import { IControllerResponse } from "../../models/interfaces/utils/IControllerResponse";
import { IHttpRequest } from "../../models/interfaces/utils/IHttpRequest";
import { IPost } from "../../models/interfaces/post/IPost";
import { Controller } from "../../models/types/Controller";
import { IUpdatePostByIdUsecase } from "../../usecases/updatePostById";
import { handleError } from "../../utils/handleError";

export const buildUpdatePost = (updatePostsUsecase: IUpdatePostByIdUsecase):Controller => {
    return async (request: Partial<IHttpRequest>): Promise<IControllerResponse> => {
        const { id } = request.params;
        const data: IPost = request.body;
        try {
            const posts = await updatePostsUsecase(data, Number(id));
            return {
                body: posts, 
                status: 200
            };
        } catch (error) {
            return handleError(error);
        }
    }
}