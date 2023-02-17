import IDto from "../../../interfaces/utils/IDto";
import { ErrorHttp } from "../../ErrorHttp";

export class LoginDto implements IDto {
    email: string;
    password: string;
    constructor({ email, password }: any) {
        this.email = email;
        this.password = password;
    }

    verify(): void {
        if (!this.email) {
            throw new ErrorHttp(400, "Email is required");
        }
        if (!this.password) {
            throw new ErrorHttp(400, "Password is required");
        }
    }
}