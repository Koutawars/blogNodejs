import { IPost } from "./IPost";

export interface IPostRepository {
    findAll(): Promise<IPost[]>;
    findOne(id: number): Promise<IPost>;
}