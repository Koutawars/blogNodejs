import { IControllerResponse } from "../../models/interfaces/utils/IControllerResponse";
import { IGetPostsUsecase } from "../../usecases/post/getPosts";
import { handleError } from "../../utils/handleError";

export const buildGetPosts = (getPostsUsecase: IGetPostsUsecase) => {
    return async (): Promise<IControllerResponse> => {
        try {
            const posts = await getPostsUsecase();
            return {
                body: posts, 
                status: 200
            };
        } catch (error) {
            return handleError(error);
        }
    }
}