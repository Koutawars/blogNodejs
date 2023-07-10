import { RegisterDto } from "../../models/Class/dto/user/Register";
import { IControllerResponse } from "../../models/interfaces/utils/IControllerResponse";
import { IHttpRequest } from "../../models/interfaces/utils/IHttpRequest";
import { Controller } from "../../models/types/Controller";
import { IRegisterUsecase } from "../../usecases/user/register";
import { handleError } from "../../utils/handleError";

export const buildRegister = (registerUsecase: IRegisterUsecase):Controller => {
    return async (request: Partial<IHttpRequest>): Promise<IControllerResponse> => {
        const data: RegisterDto = new RegisterDto(request.body);
        try {
            const register = await registerUsecase(data);
            return {
                body: register, 
                status: 201
            };
        } catch (error) {
            return handleError(error);
        }
    }
}