import { getRepository } from "typeorm";
import { Comment } from "../models";

export interface ICommentPayload {
    content: string;
    userId: number;
    postId: number;
}

export const getComments = async ():Promise<Array<Comment>> => {
    const repository = getRepository(Comment);
    return repository.find();
}

export const getComment = async (id: number):Promise<Comment | null> => {
    const repository = getRepository(Comment);
    const comment = await repository.findOne(id);
    if (!comment) return null;
    return comment;
}

export const createComment = async (payload: ICommentPayload): Promise<Comment> => {
    const repository = getRepository(Comment);
    const comment = new Comment();
    return repository.save({
        ...comment,
        ...payload,
    });
}