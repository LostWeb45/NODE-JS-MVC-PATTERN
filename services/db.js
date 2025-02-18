const { Sequelize, DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: __dirname + "/storage/db.sqlite",
});

const Games = sequelize.define("Games", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Users = sequelize.define("Users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const Posts = sequelize.define("Posts", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    references: { Users, key: "id" },
    allowNull: false,
  },
  gameId: {
    type: Sequelize.INTEGER,
    references: { Games, key: "id" },
    allowNull: false,
  },
});

Games.hasMany(Posts, { foreignKey: "gameId", onDelete: "CASCADE" });
Posts.belongsTo(Games, { foreignKey: "gameId" });
Users.hasMany(Posts, { foreignKey: "userId", onDelete: "CASCADE" });
Posts.belongsTo(Users, { foreignKey: "userId" });

module.exports = { Posts, Games, Users, sequelize };
