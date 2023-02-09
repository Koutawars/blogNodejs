import { IControllerResponse } from "../../models/interfaces/IControllerResponse";
import { IGetPostsUsecase } from "../../usecases/getPosts";

export const buildGetPosts = (getPostsUsecase: IGetPostsUsecase) => {
    return async (): Promise<IControllerResponse> => {
        const posts = await getPostsUsecase();
        return {
            body: posts, 
            status: 200
        };
    }
}