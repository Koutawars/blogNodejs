import { CreatePostDto } from "../../models/Class/dto/Post/CreatePost";
import { IControllerResponse } from "../../models/interfaces/utils/IControllerResponse";
import { IHttpRequest } from "../../models/interfaces/utils/IHttpRequest";
import { Controller } from "../../models/types/Controller";
import { ICreatePostUsecase } from "../../usecases/post/createPost";
import { handleError } from "../../utils/handleError";

export const buildCreatePosts = (createPostsUsecase: ICreatePostUsecase):Controller => {
    return async (request: Partial<IHttpRequest>): Promise<IControllerResponse> => {
        const data: CreatePostDto = new CreatePostDto(request.body);
        try {
            const posts = await createPostsUsecase(data);
            return {
                body: posts, 
                status: 201
            };
        } catch (error) {
            return handleError(error);
        }
    }
}