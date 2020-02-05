import { AuthenticationError } from 'apollo-server-express'
import { promisify } from 'util'

import UserModel from '../Api/models/User'
import jwt from 'jsonwebtoken'

class Auth {
    async signIn({ data: { name, email, password } }) {
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
    console.log(user)
        const token = jwt.sign(payload, process.env.JWT_ENCRYPT, {
            expiresIn: '3d'
        })

        return { token, ...payload, isValid: true }
    }

    async authenticate(token) {
        let user
        if (!token) {
            return { user, token, isValid: false }
        }
        try {
            user = await promisify(jwt.verify)(token, process.env.JWT_ENCRYPT)
        } catch (err) {
            return { user, isValid: false }
        }

        if (!user) {
            return { user, isValid: false }
        }

        return { ...user, token, isValid: true }
    }
}

export default new Auth()
