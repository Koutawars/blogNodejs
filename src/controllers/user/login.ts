import { LoginDto } from "../../models/Class/dto/user/Login";
import { IControllerResponse } from "../../models/interfaces/utils/IControllerResponse";
import { IHttpRequest } from "../../models/interfaces/utils/IHttpRequest";
import { Controller } from "../../models/types/Controller";
import { ILoginUsecase } from "../../usecases/user/login";
import { handleError } from "../../utils/handleError";

export const buildLogin = (loginUsecase: ILoginUsecase):Controller => {
    return async (request: Partial<IHttpRequest>): Promise<IControllerResponse> => {
        const data: LoginDto = new LoginDto(request.body);
        try {
            const login = await loginUsecase(data);
            return {
                body: login, 
                status: 200
            };
        } catch (error) {
            return handleError(error);
        }
    }
}