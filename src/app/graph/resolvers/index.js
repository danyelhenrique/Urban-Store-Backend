const resolvers = {
	Query: {
		indexProduct(_, args, { helpers: { ProductConnect } }) {
			const product = ProductConnect.index(args)
			return product
		},
		showProduct(_, args, { helpers: { ProductConnect } }) {
			const product = ProductConnect.show(args)
			return product
		},
		indexUser(_, args, { helpers: { UserConnect } }) {
			const User = UserConnect.index(args)
			return User
		},
		showUser(_, args, { helpers: { UserConnect } }) {
			const User = UserConnect.show(args)
			return User
		}
	},

	Mutation: {
		storeProduct(_, args, { helpers: { ProductConnect } }) {
			const product = ProductConnect.store(args)

			return product
		},
		destroyProduct(_, args, { helpers: { ProductConnect } }) {
			const product = ProductConnect.destroy(args)
			return product
		},

		updateProduct(_, args, { helpers: { ProductConnect } }) {
			const product = ProductConnect.update(args)

			return product
		},

		storeUser(_, args, { helpers: { UserConnect } }) {
			const user = UserConnect.store(args)

			return user
		},
		destroyUser(_, args, { helpers: { UserConnect } }) {
			const user = UserConnect.destroy(args)

			return user
		},
		updateUser(_, args, { helpers: { UserConnect } }) {
			const user = UserConnect.update(args)

			return user
		}
	}
}

module.exports = resolvers
