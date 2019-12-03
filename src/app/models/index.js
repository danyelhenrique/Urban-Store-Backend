require('../../config/dotenv')
const Sequelize = require('sequelize');
const config = require('../../config/database')

const sequelize = new Sequelize(config.database, config.username, config.password, config);


module.exports = sequelize
