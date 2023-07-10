import { IPost } from "./IPost";

export interface IPostRepository {
    findAll(): Promise<IPost[]>;
    findOne(id: number): Promise<IPost>;
    create(data: IPost): Promise<IPost>;
    update(id: number, data: IPost): Promise<IPost>;
    delete(id: number): Promise<IPost>;
}