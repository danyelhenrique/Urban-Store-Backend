// 'use strict';
const { Model, DataTypes } = require('sequelize')

class Product extends Model {
    static init(sequelize) {
        super.init({
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
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.User, {
            through: 'purchases',
            as: 'users',
            foreignKey: 'product_id'
        })
    }
}


module.exports = Product