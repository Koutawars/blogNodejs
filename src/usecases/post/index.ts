import { buildGetPosts } from "./getPosts";
import { postRepository } from "../../repositories";
import { buildGetPostById } from "./getPostById";
import { buildCreatePost } from "./createPost";
import { buildUpdatePostById } from "./updatePostById";
import { buildDeletePostById } from "./deletePostById";

const getPosts = buildGetPosts({ postRepository });
const getPostById = buildGetPostById({ postRepository });
const createPost = buildCreatePost({ postRepository });
const updatePost = buildUpdatePostById({ postRepository });
const deletePost = buildDeletePostById({ postRepository });

export const postUseCase = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
}