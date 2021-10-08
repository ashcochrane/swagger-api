import express from "express";
import PostController from "../controllers/post.controller";

const router = express.Router()

router.get('/', async (_req, res) => {
    const controller = new PostController();
    const response = controller.getPosts();
    return res.status(200).send(response);
})

router.get('/:id', async(_req,res) => {
    const controller = new PostController();
    const response = controller.getPost(_req.params.id);
    if (!response) return res.status(404).send("User not found");
    return res.status(200).send(response);
})

router.post('/', async (_req, res) => {
    const controller = new PostController();
    const response = controller.createPost(_req.body)
    return res.status(201).send(response);
})

export default router;