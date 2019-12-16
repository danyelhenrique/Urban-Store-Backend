const resolvers = {
	Query: {
		indexProduct: async (_, args, { helpers: { ProductConnect } }) => {
			const product = await ProductConnect.index(args)

			return product
		}
	}
}

module.exports = resolvers
