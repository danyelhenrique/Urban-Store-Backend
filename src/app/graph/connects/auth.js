const UserModel = require('../../models/User');
const jwt = require('jsonwebtoken');

class Auth {
	// login user
	async store({ data: { name, email, password } }) {
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
	async show({ token }) {
		// eslint-disable-next-line handle-callback-err
		const user = jwt.verify(token, 'shhhhh', (err, decoded) => {
			console.log(decoded.foo); // bar
			if (err) return null;
		});

		return user;
	}
}

module.exports = new Auth();
