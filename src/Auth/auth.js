import { AuthenticationError } from 'apollo-server-express'
import { promisify } from 'util'

import UserModel from '../Api/models/User'
import jwt from 'jsonwebtoken'

class Auth {
    async signIn({ data: { email, password } }) {
        const user = await UserModel.findOne({
            where: { email },
            attributes: ['name', 'id', 'password_hash', 'email', 'avatar_url']
        })
        const validPassword = user.comparePassword(password)

        if (!validPassword) {
            throw new AuthenticationError('Fail to authenticate user')
        }

        const payload = {
            user: user.id,
            name: user.name,
            email: user.email,
            avatar_url: user.avatar_url
        }
        const token = jwt.sign(payload, process.env.JWT_ENCRYPT, {
            expiresIn: '3d'
        })

        await user.update({ token })

        return { token, ...payload, isValid: true }
    }

    async authenticate(token) {
        if (!token) {
            return { isValid: false }
        }

        let userDecript

        const user = await UserModel.findOne({
            where: { token: `${token}` },
            attributes: ['name', 'id', 'email', 'avatar_url']
        }).catch(console.error)

        try {
            userDecript = await promisify(jwt.verify)(
                token,
                process.env.JWT_ENCRYPT
            )
        } catch (err) {
            return { isValid: false }
        }

        if (!user) {
            const findUser = await UserModel.findOne({
                where: { id: userDecript.user }
            })
            await findUser.update({ token: null })

            return { isValid: false }
        }

        return { ...userDecript, token, isValid: true }
    }
}

export default new Auth()
