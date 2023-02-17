import { userUsecase } from "../../usecases/user";
import { buildLogin } from "./login";
import { buildRegister } from "./register";

const login = buildLogin(userUsecase.login);
const register = buildRegister(userUsecase.register);

export const userController = {
    login,
    register
}