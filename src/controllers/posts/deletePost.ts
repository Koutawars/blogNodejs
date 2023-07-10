import { IControllerResponse } from "../../models/interfaces/utils/IControllerResponse";
import { IHttpRequest } from "../../models/interfaces/utils/IHttpRequest";
import { Controller } from "../../models/types/Controller";
import { IDeletePostByIdUsecase } from "../../usecases/post/deletePostById";
import { handleError } from "../../utils/handleError";

export const buildDeletePost = (deletePostUsecase: IDeletePostByIdUsecase):Controller => {
    return async (request: Partial<IHttpRequest>): Promise<IControllerResponse> => {
        const { id } = request.params;
        try {
            const posts = await deletePostUsecase(Number(id));
            return {
                body: posts, 
                status: 200
            };
        } catch (error) {
            return handleError(error);
        }
    }
}