import { Model, DataTypes } from 'sequelize';

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
					type: DataTypes.STRING
				}
			},
			{
				sequelize,
				tableName: 'users',
				freezeTableName: true
			}
		);
		User.addHook('beforeSave', (user, options) => {
			user.password_hash = user.password;
		});
	}

	static associate(models) {
		this.belongsToMany(models.Product, {
			through: 'purchases',
			as: 'products',
			foreignKey: 'user_id'
		});
	}
}

export default User;
