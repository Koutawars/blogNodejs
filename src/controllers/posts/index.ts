import { buildGetPosts } from "./getPosts";
import { postUseCase } from "../../usecases";
import { buildGetPostById } from "./getPostById";

const getPosts = buildGetPosts(postUseCase.getPosts);
const getPostById = buildGetPostById(postUseCase.getPostById);

export const postController = {
    getPosts,
    getPostById
}