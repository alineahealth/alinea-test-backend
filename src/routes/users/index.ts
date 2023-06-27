import express from "express";
const router = express.Router();
import {userController}  from "../../controllers/users.controller"

router.post('/auth', async (req, res) => {
    const controller = new userController()
    const result = await controller.auth(req.query)
    return res.send({
        statusCode: 200,
        message: result
    })
});

export default router;