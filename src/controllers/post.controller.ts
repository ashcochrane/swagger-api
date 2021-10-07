import path from "path/posix";
import { Get, Route, Tags, Post as PostMethod, Body, Path } from "tsoa";
import { Post } from "../models";
import {
    getPosts,
    createPost,
    IPostPayload,
    getPost,
} from "../repositories/post";

@Route('/posts')
@Tags('Post')
export default class PostController {

    @Get('/')
    public async getPosts():Promise<Array<Post>> {
        return getPosts();
    }

    @Get('/:id')
    public async getPost(@Path() id: string):Promise<Post | null> {
        return getPost(Number(id));
    }

    @PostMethod('/')
    public async createPost(@Body() body: IPostPayload):Promise<Post> {
        return createPost(body);
    }

}