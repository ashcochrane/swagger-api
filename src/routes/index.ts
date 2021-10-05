import express from "express";
import PingController from "../controllers/ping";

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

export default router;