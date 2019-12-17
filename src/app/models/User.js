// 'use strict';
const { Model, DataTypes } = require('sequelize')

class User extends Model {
	static init(sequelize) {
		super.init(
			{
				name: {
					type: DataTypes.STRING,
					allowNull: false
				},
				email: {
					type: DataTypes.STRING,
					allowNull: false
				},
				password: {
					type: DataTypes.VIRTUAL,
					allowNull: false
				},
				password_hash: {
					type: DataTypes.STRING,
					allowNull: false
				}
			},
			{
				sequelize,
				tableName: 'users',
				freezeTableName: true
			}
		)
	}

	static associate(models) {
		this.belongsToMany(models.Product, {
			through: 'purchases',
			as: 'products',
			foreignKey: 'user_id'
		})
	}
}

User.addHook('beforeSave', (user, options) => {
	console.log(user)
	console.log('options:', options)
})

module.exports = User
