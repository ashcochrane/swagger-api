import express from "express";
import CommentController from "../controllers/comment.controller";

const router = express.Router();

router.get('/', async (_req, res) => {
    const controller = new CommentController();
    const response = controller.getComments();
    return res.status(200).send(response);
})

router.get('/:id', async(_req,res) => {
    const controller = new CommentController();
    const response = controller.getComment(_req.params.id);
    if (!response) return res.status(404).send("User not found");
    return res.status(200).send(response);
})

router.post('/', async (_req, res) => {
    const controller = new CommentController();
    const response = controller.createComment(_req.body)
    return res.status(201).send(response);
})

export default router;