const { Router } = require("express");

const postController = require("../controller/postController");

const postRouter = new Router();

postRouter.get("/", postController.getAll);
postRouter.get("/:id", postController.getOne);
postRouter.delete("/:id", postController.destroy);
postRouter.post("/", postController.create);

module.exports = { postRouter };
