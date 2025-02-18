const { Router } = require("express");

const GameController = require("../controller/GameController");

const gameRouter = new Router();

gameRouter.get("/", GameController.getAll);
gameRouter.get("/:id", GameController.getOne);
gameRouter.delete("/:id", GameController.destroy);
gameRouter.post("/", GameController.create);

module.exports = { gameRouter };
