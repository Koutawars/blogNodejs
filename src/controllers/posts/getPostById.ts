import { IControllerResponse } from "../../models/interfaces/IControllerResponse";
import { IHttpRequest } from "../../models/interfaces/IHttpRequest";
import { IGetPostByIdUsecase } from "../../usecases/getPostById";
import { handleError } from "../../utils/handleError";

export const buildGetPostById = (getPostById: IGetPostByIdUsecase) => {
    return async (httpRequest: IHttpRequest): Promise<IControllerResponse> => {
        const { id } = httpRequest.params;
        try {
            const post = await getPostById(Number(id));
            return {
                body: post, 
                status: 200
            };
        } catch (error) {
            return handleError(error);
        }
    }
}