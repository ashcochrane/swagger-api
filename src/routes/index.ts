import express from "express";
import PingController from "../controllers/ping";
import UserRouter from "./user.router"
import PostRouter from "./post.router"
import CommentRouter from "./comment.router"


const router = express.Router();

router.get('/ping', async(req,res) => {
    try {
        const controller = new PingController();
        const response = await controller.getMessage();
        res.status(200).send(response);
    } catch (e) {
        res.status(500).send("Error");
    }
})

router.use("/users",UserRouter);
router.use("/posts",PostRouter);
router.use("/comments",CommentRouter)

export default router;