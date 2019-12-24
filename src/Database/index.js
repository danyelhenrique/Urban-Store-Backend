import '../Config/dotenv'
import User from '../Api/models/User'
import Purchase from '../Api/models/Purchase'
import Product from '../Api/models/Product'

import Sequelize from 'sequelize'
import config from '../Config/database'

const sequelize = new Sequelize(config.database, config.username, config.password, config)
User.init(sequelize)
Purchase.init(sequelize)
Product.init(sequelize)

User.associate(sequelize.models)
Purchase.associate(sequelize.models)
Product.associate(sequelize.models)

export default sequelize
