import UserModel from '../models/User'

class User {
    async index({ offset, limit }) {
        try {
            const users = await UserModel.findAll({
                attributes: ['id', 'name', 'email', 'avatar_url']
            })
            return users
        } catch (err) {
            return new Error('Internal server error <Fail to get Users>')
        }
    }

    async show({ id }) {
        try {
            const user = await UserModel.findByPk(id, {
                attributes: ['id', 'name', 'email', 'avatar_url']
            })
            return user
        } catch (err) {
            return new Error('Internal server error <Fail to get User>')
        }
    }

    async store({ data: { name, email, password } }) {
        try {
            const user = await UserModel.create({
                name,
                email,
                password
            })
            return user
        } catch (err) {
            return new Error('Internal server error <Fail to store User>')
        }
    }

    async update({ id, input }) {
        try {
            const updateUser = await UserModel.findByPk(id, {
                attributes: ['name', 'id', 'email', 'avatar_url']
            })

            const user = await updateUser.update(input)

            const payload = {
                user: user.id,
                name: user.name,
                email: user.email,
                avatar_url: user.avatar_url
            }

            return payload
        } catch (err) {
            return new Error('Internal server error <Fail to update User>')
        }
    }

    async destroy({ id }) {
        try {
            const destroyUser = await UserModel.findByPk(id)

            await destroyUser.destroy()
            return true
        } catch (err) {
            return new Error('Internal server error <Fail to destroy User>')
        }
    }
}

export default new User()
