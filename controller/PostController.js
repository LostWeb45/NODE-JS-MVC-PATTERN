const { Posts, Users, Games } = require("../services/db");

class PostController {
  async getAll(req, res) {
    const post = await Posts.findAll({
      include: [Users, Games],
    });
    res.json(post);
  }

  async getOne(req, res) {
    const post = await Posts.findByPk(req.params.id);
    res.json(post);
  }

  async create(req, res) {
    try {
      await Posts.create({ name: req.body.name });
      res.send("Пост успешно добавлена");
    } catch (e) {
      res.send(e);
    }
  }

  async destroy(req, res) {
    try {
      const post = await Posts.destroy({ where: { id: req.params.id } });
      if (post) {
        res.send("Пост c id: " + req.params.id + " была удалена");
      } else {
        res.send("Пост с id: " + req.params.id + " не существует");
      }
    } catch (e) {
      res.send(e);
    }
  }
}

module.exports = new PostController();
