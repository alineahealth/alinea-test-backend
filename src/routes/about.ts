import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Sobre a Alínea')
});

export default router;