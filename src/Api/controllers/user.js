const UserModel = require('../models/User');

class User {
	async index({ offset, limit }) {
		const users = await UserModel.findAll({
			attributes: [ 'id', 'name', 'email' ]
		});
		return users;
	}

	async show({ id }) {
		const user = await UserModel.findByPk(id, {
			attributes: [ 'id', 'name', 'email' ]
		});
		return user;
	}

	async store({ data: { name, email, password } }) {
		const user = await UserModel.create({
			name,
			email,
			password
		});
		return user;
	}

	async update({ id, input }) {
		const updateUser = await UserModel.findByPk(id);

		const user = await updateUser.update(input);
		return user;
	}

	async destroy({ id }) {
		const destroyUser = await UserModel.findByPk(id);

		const user = await destroyUser.destroy();
		return !user.dataValues;
	}
}

module.exports = new User();