import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { Comment } from "../models";
import {
    getComment,
    createComment,
    ICommentPayload,
    getComments,
} from "../repositories/comment";

@Route('/comments')
@Tags('Comment')
export default class CommentController {

    @Get('/')
    public async getComments():Promise<Array<Comment>> {
        return getComments();
    }

    @Get('/:id')
    public async getComment(@Path() id:string):Promise<Comment | null> {
        return getComment(Number(id));
    }

    @Post('/')
    public async createComment(@Body() body: ICommentPayload): Promise<Comment> {
        return createComment(body);
    }


}