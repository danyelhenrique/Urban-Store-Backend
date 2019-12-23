const { AuthenticationError } = require('apollo-server-express');
const UserModel = require('../Api/models/User');
const jwt = require('jsonwebtoken');

class Auth {
	// login user
	async signIn({ data: { name, email, password } }) {
		const user = await UserModel.findOne({
			where: { email },
			attributes: [ 'name', 'id' ]
		});
		// compare password with bcrypt later

		const payload = {
			user: user.id,
			name: user.name,
			exp: Math.floor(Date.now() / 1000) + 60 * 60 // 1HR
		};

		const token = jwt.sign(payload, 'shhhhh');

		return { token };
	}

	// verify user
	async authenticate(token) {
		if (!token) {
			throw new AuthenticationError('erro token not provider');
		}
		// eslint-disable-next-line handle-callback-err
		const user = jwt.verify(token, 'shhhhh', (err, decoded) => {
			if (err) {
				throw new AuthenticationError('Invalid token');
			}
		});

		return user;
	}
}

module.exports = new Auth();
