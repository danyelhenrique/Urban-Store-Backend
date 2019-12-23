// 'use strict';
// eslint-disable-next-line no-unused-vars
const { Model, DataTypes } = require('sequelize');

class Purchase extends Model {
	static init(sequelize) {
		super.init(
			{},
			{
				sequelize,
				tableName: 'purchases',
				freezeTableName: true
			}
		);
	}

	static associate(models) {
		this.belongsToMany(models.User, {
			through: 'purchases',
			as: 'users',
			foreignKey: 'user_id'
		});
		this.belongsToMany(models.Product, {
			through: 'purchases',
			as: 'products',
			foreignKey: 'product_id'
		});
	}
}

module.exports = Purchase;
