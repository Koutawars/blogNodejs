import { RegisterDto } from "../../models/Class/dto/user/Register";
import { RegisterResponse } from "../../models/Class/dto/user/RegisterResponse";
import { ErrorHttp } from "../../models/Class/ErrorHttp";
import { IUserRepository } from "../../models/interfaces/user/IUserRepository";
import { IEncrypt } from "../../utils/encrypt";
export type IRegisterUsecase = (data: RegisterDto) => Promise<RegisterResponse>;

export const buildRegister = ({
    userRepository,
    encrypt
}: {
    userRepository: IUserRepository,
    encrypt: IEncrypt
}): IRegisterUsecase => {
    return async (data: RegisterDto): Promise<RegisterResponse> => {
        data.verify();
        data.password = await encrypt.hash(data.password);
        const userExist = await userRepository.findByEmailOrUsename(data.email, data.username);
        if(userExist !== null) {
            throw new ErrorHttp(400, "User already exist");
        }
        const user = await userRepository.create(data);
        return new RegisterResponse({ id: user.id, message: "User created" });
    }
}
