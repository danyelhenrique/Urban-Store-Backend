const resolvers = {
	Query: {
		indexProduct(_, args, { helpers: { ProductConnect } }) {
			const product = ProductConnect.index(args)
			return product
		},
		showProduct(_, args, { helpers: { ProductConnect } }) {
			const product = ProductConnect.show(args)
			return product
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
		}
	}
}

module.exports = resolvers
