const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' 
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const Tarefa = sequelize.define('Tarefa', {
  titulo: DataTypes.STRING
});

sequelize.sync();

module.exports = { Tarefa };