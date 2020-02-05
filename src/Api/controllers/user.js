import UserModel from '../models/User'
import jwt from 'jsonwebtoken'

class User {
    async index({ offset, limit }) {
        const users = await UserModel.findAll({
            attributes: ['id', 'name', 'email', 'avatar_url']
        })
        return users
    }

    async show({ id }) {
        const user = await UserModel.findByPk(id, {
            attributes: ['id', 'name', 'email', 'avatar_url']
        })
        return user
    }

    async store({ data: { name, email, password } }) {
        const user = await UserModel.create({
            name,
            email,
            password
        })
        return user
    }

    async update({ id, input }) {
        const updateUser = await UserModel.findByPk(id, {
            attributes: ['name', 'id', 'password_hash', 'email', 'avatar_url']
        })

        const { password_hash: password, ...userData } = updateUser.dataValues

        const user = await updateUser.update({
            password,
            ...userData,
            ...input
        })

        const payload = {
            user: user.id,
            name: user.name,
            email: user.email,
            avatar_url: user.avatar_url
        }

        const token = jwt.sign(payload, process.env.JWT_ENCRYPT, {
            expiresIn: '3d'
        })

        return { token, ...payload, isValid: true }
    }

    async destroy({ id }) {
        const destroyUser = await UserModel.findByPk(id)

        const user = await destroyUser.destroy()
        return !user.dataValues
    }
}

export default new User()
