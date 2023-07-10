import { IUser } from "./IUser";

export interface IUserRepository {
    create(data: IUser): Promise<IUser>;
    findByEmail(email: string): Promise<IUser>;
    findByEmailOrUsename(email: string, username: string): Promise<IUser>;
}