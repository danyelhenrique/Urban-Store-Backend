// 'use strict';
const { Model, DataTypes } = require('sequelize')

class Purchase extends Model {
    static init(sequelize) {
        super.init({
            // user_id: {
            //     type: DataTypes.INTEGER,
            //     allowNull: false,
            // },
            // product_id: {
            //     type: DataTypes.INTEGER,
            //     allowNull: false,
            // },
        }, {
            sequelize
        })
    }

    static associate(models) {
        // this.belongsToMany(models.User, {
        //     through: 'purchases',
        //     // as: 'products',
        //     foreignKey: 'user_id'
        // })
        // this.belongsToMany(models.Product, {
        //     through: 'purchases',
        //     // as: 'products',
        //     foreignKey: 'product_id'
        // })
    }
}


module.exports = Purchase