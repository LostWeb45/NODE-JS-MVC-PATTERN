const { Games } = require("../services/db");

class GameController {
  async getAll(req, res) {
    const game = await Games.findAll();
    res.json(game);
  }

  async getOne(req, res) {
    const game = await Games.findByPk(req.params.id);
    res.json(game);
  }

  async create(req, res) {
    try {
      await Games.create({ name: req.body.name });
      res.send("Игра успешно добавлена");
    } catch (e) {
      res.send(e);
    }
  }

  async destroy(req, res) {
    try {
      const game = await Games.destroy({ where: { id: req.params.id } });
      if (game) {
        res.send("Игра c id: " + req.params.id + " была удалена");
      } else {
        res.send("Игры с id: " + req.params.id + " не существует");
      }
    } catch (e) {
      res.send(e);
    }
  }
}

module.exports = new GameController();
