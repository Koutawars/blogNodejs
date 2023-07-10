import { userRepository } from "../../repositories";
import { buildLogin } from "./login";
import { buildRegister } from "./register";

import { encrypt } from "../../utils/encrypt";
import { tokenTool } from "../../utils/token";

const login = buildLogin({ userRepository, encrypt, tokenTool });
const register = buildRegister({ userRepository, encrypt });

export const userUsecase = {
    login,
    register
}
