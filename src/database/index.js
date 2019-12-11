require('../config/dotenv')
const User = require('../app/models/User')
const Purchase = require('../app/models/Purchase')
const Product = require('../app/models/Product')
'use strict'

const Sequelize = require('sequelize')
const config = require('../config/database')

const sequelize = new Sequelize(config.database, config.username, config.password, config)
User.init(sequelize)
Purchase.init(sequelize)
Product.init(sequelize)

User.associate(sequelize.models)
Purchase.associate(sequelize.models)
Product.associate(sequelize.models)

module.exports = sequelize
