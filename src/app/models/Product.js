'use strict';
const DataTypes = require('sequelize')
const sequelize = require('./index')
const Product = sequelize.define('products', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        allowNull: false,
        type: DataTypes.DECIMAL,
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});


module.exports = Product