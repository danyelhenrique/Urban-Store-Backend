const UserModel = require('../../models/User')

class User {
	async index({ offset, limit }) {
		const users = await UserModel.findAll()
		return users.map((user) => {
			return user.dataValues
		})
	}

	async show({ id }) {
		const user = await UserModel.findByPk(id)
		return user.dataValues
	}

	async store({ name, email, password }) {
		const user = await UserModel.create({
			name,
			email,
			password,
			password_hash: password
		})
		return user.dataValues
	}

	async update({ id, ...data }) {
		const updateUser = await UserModel.findByPk(id)

		const user = await updateUser.update(data)
		return user.dataValues
	}

	async destroy({ id }) {
		const destroyUser = await UserModel.findByPk(id)

		const user = await destroyUser.destroy()
		return !user.dataValues
	}
}

module.exports = new User()
