import { AuthenticationError } from 'apollo-server-express';
import { promisify } from 'util';

import UserModel from '../Api/models/User';
import jwt from 'jsonwebtoken';

class Auth {
	async signIn({ data: { name, email, password } }) {
		const user = await UserModel.findOne({
			where: { email },
			attributes: [ 'name', 'id', 'password_hash' ]
		});
		const validPassword = user.comparePassword(password);

		if (!validPassword) {
			throw new AuthenticationError('Fail to authenticate user');
		}

		const payload = {
			user: user.id,
			name: user.name
		};

		const token = jwt.sign(payload, process.env.JWT_ENCRYPT, { expiresIn: '3d' });

		return { token };
	}

	async authenticate(token) {
		if (!token) {
			throw new AuthenticationError('erro token not provider');
		}
		const user = await promisify(jwt.verify)(token, process.env.JWT_ENCRYPT);

		if (!user) {
			throw new AuthenticationError('erro token not provider');
		}

		return user;
	}
}

export default new Auth();
