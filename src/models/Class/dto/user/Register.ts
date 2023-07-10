import IDto from "../../../interfaces/utils/IDto";
import { ErrorHttp } from "../../ErrorHttp";

export class RegisterDto implements IDto {
    email: string;
    password: string;
    username: string;
    name: string;
    updatedAt: Date;
    constructor({ email, password, username, name }: any) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.name = name;
        this.updatedAt = new Date();
    }
    verify(): void {
        if (!this.email) {
            throw new ErrorHttp(400, "Email is required");
        }

        if (!this.name) {
            throw new ErrorHttp(400, "Name is required");
        }

        if (!this.password) {
            throw new ErrorHttp(400, "Password is required");
        }
        if (!this.username) {
            throw new ErrorHttp(400, "Username is required");
        }
    }
    
}