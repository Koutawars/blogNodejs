import { buildGetPosts } from "./getPosts";
import { postRepository } from "../repositories";
import { buildGetPostById } from "./getPostById";

const getPosts = buildGetPosts({ postRepository });
const getPostById = buildGetPostById({ postRepository });

export const postUseCase = {
    getPosts,
    getPostById
}