import { buildGetPosts } from "./getPosts";
import { postUseCase } from "../../usecases/post";
import { buildGetPostById } from "./getPostById";
import { buildCreatePosts } from "./createPost";
import { buildUpdatePost } from "./updatePost";
import { buildDeletePost } from "./deletePost";

const getPosts = buildGetPosts(postUseCase.getPosts);
const getPostById = buildGetPostById(postUseCase.getPostById);
const createPost = buildCreatePosts(postUseCase.createPost);
const updatePost = buildUpdatePost(postUseCase.updatePost);
const deletePost = buildDeletePost(postUseCase.deletePost);

export const postController = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
}