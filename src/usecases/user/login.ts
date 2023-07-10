import { LoginResponse } from "../../models/Class/dto/user/LoginResponse";
import { LoginDto } from "../../models/Class/dto/user/Login";
import { ErrorHttp } from "../../models/Class/ErrorHttp";
import { IUserRepository } from "../../models/interfaces/user/IUserRepository";
import { IEncrypt } from "../../utils/encrypt";
import { IToken } from "../../utils/token";
export type ILoginUsecase = (data: LoginDto) => Promise<LoginResponse>;

export const buildLogin = ({
    userRepository,
    encrypt,
    tokenTool
}: {
    userRepository: IUserRepository,
    encrypt: IEncrypt,
    tokenTool: IToken
}): ILoginUsecase => {
    return async (data: LoginDto): Promise<LoginResponse> => {
        data.verify();
        const user = await userRepository.findByEmail(data.email);
        if(user === null) {
            throw new ErrorHttp(400, "Invalid credentials");
        }
        const isMatch = await encrypt.compare(data.password, user.password);
        if(!isMatch) {
            throw new ErrorHttp(400, "Invalid credentials");
        }

        const token = tokenTool.generate({ id: user.id });
        return new LoginResponse({ user, token });
    }
}
