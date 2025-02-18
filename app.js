const express = require("express");
const cors = require("cors");
const { router } = require("./routes/router");
const { sequelize, Games, Users, Posts } = require("./services/db");

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

sequelize
  .sync({ force: true })
  // .sync()
  .then(async () => {
    await Games.findAll().then((data) => {
      if (!data.length) {
        Games.bulkCreate([
          { name: "Диабло" },
          { name: "ForzaHorizon 5" },
          { name: "CSGO" },
        ]);
      }
    });
    await Users.findAll().then((data) => {
      if (!data.length) {
        Users.bulkCreate([
          { name: "Костя", age: 19 },
          { name: "Никита", age: 19 },
          { name: "Харитончик", age: 20 },
        ]);
      }
    });
    await Posts.findAll().then((data) => {
      if (!data.length) {
        Posts.bulkCreate([
          { title: "Заголовок", desc: "Описание", userId: 1, gameId: 1 },
          //   { title: "Заголовок2", desc: "Описание2", userId: 2, gameId: 2 },
          //   { title: "Заголово3", desc: "Описани3", userId: 3, gameId: 3 },
        ]);
      }
    });
    app.listen(3000, () => {
      console.log("Worked");
    });
  })
  .catch((err) => {
    console.error("Не удалось синхронизировать базы данных:", err);
  });
