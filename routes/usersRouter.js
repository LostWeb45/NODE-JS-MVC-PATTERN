const { Router } = require("express");

const userController = require("../controller/UserController");

const userRouter = new Router();

userRouter.get("/", userController.getAll);
userRouter.get("/:id", userController.getOne);
userRouter.delete("/:id", userController.destroy);
userRouter.post("/", userController.create);

module.exports = { userRouter };
