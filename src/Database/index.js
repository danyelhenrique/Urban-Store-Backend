'use strict';
require('../Config/dotenv');
const User = require('../Api/models/User');
const Purchase = require('../Api/models/Purchase');
const Product = require('../Api/models/Product');

const Sequelize = require('sequelize');
const config = require('../Config/database');

const sequelize = new Sequelize(config.database, config.username, config.password, config);
User.init(sequelize);
Purchase.init(sequelize);
Product.init(sequelize);

User.associate(sequelize.models);
Purchase.associate(sequelize.models);
Product.associate(sequelize.models);

module.exports = sequelize;
