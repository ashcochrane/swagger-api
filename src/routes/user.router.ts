import express from "express";
import { resourceLimits } from "worker_threads";
import UserController from "../controllers/user.controller";

const router = express.Router();

router.get('/', async (_req,res) => {
    const controller = new UserController();
    const response = await controller.getUsers();
    return res.status(200).send(response);
});

router.get('/:id', async (_req,res) => {
    const controller = new UserController();
    const response = await controller.getUser(_req.params.id);
    if (!response) return res.status(404).send({message: "User not found"});
    return res.status(200).send(response);
});

router.post('/', async (_req,res) => {
    const controller = new UserController();
    const response = await controller.createUser(_req.body);
    return res.status(201).send(response);
})

export default router;