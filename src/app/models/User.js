'use strict';
const DataTypes = require('sequelize')
const sequelize = require('../../config/database')
const User = sequelize.define('users', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


module.exports = User