import { Router } from "express";

const ingredientsRouter = Router();

ingredientsRouter.get("/", (req, res) => {
    res.send("GET /ingredients");
});

ingredientsRouter.get("/:slug", (req, res) => {
    res.send("GET /ingredients/:slug");
});

export default ingredientsRouter;