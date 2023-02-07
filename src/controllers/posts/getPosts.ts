import { IControllerResponse } from "../../models/interfaces/IControllerResponse";

export const getPosts = async (): Promise<IControllerResponse> => {
    const posts = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2'}];
    return {
        body: posts,
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    };
}