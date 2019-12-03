const User = require('../models/User')

const UserConnect = {
    async store({ name, email, password }) {
        const user = await User.create({
            name,
            email,
            password_hash: password
        })
        return user.dataValues
    },

    async index({ offset, limit }) {
        const users = await User.findAll({})
        return users.map(user => {
            return user.dataValues
        })

    },
    async show({ id }) {
        const user = await User.findByPk(id)
        return user.dataValues
    },
    async update({ id, ...data }) {
        const updateUser = await User.findByPk(id)

        const user = await updateUser.update(data)
        return user.dataValues
    },
    async destroy({ id }) {
        const destroyUser = await User.findByPk(id)

        const user = await destroyUser.destroy()
        return !user.dataValues
    },
};

module.exports = { UserConnect }