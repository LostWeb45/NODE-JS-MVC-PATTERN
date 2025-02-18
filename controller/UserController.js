const { Users } = require("../services/db");

class UsersController {
  async getAll(req, res) {
    const user = await Users.findAll();
    res.json(user);
  }

  async getOne(req, res) {
    const user = await Users.findByPk(req.params.id);
    res.json(user);
  }

  async create(req, res) {
    try {
      await Users.create({ name: req.body.name });
      res.send("Игра успешно добавлена");
    } catch (e) {
      res.send(e);
    }
  }

  async destroy(req, res) {
    try {
      const user = await Users.destroy({ where: { id: req.params.id } });
      if (user) {
        res.send("Игра c id: " + req.params.id + " была удалена");
      } else {
        res.send("Игры с id: " + req.params.id + " не существует");
      }
    } catch (e) {
      res.send(e);
    }
  }
}

module.exports = new UsersController();
