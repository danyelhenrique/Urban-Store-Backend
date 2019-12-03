
const resolvers = {
    Query: {
        indexUser: async (_, args, { helpers: { UserConnect } }) => {
            const user = await UserConnect.index(args)

            return user
        },
        showUser: async (_, args, { helpers: { UserConnect } }) => {
            const user = await UserConnect.show(args)
            return { id, name, password_hash, email } = user

        }
    },
    Mutation: {
        storeUser: async (_, args, { helpers: { UserConnect } }) => {
            const user = await UserConnect.store(args)

            return { id, name, password_hash, email } = user
        },
        updateUser: async (_, args, { helpers: { UserConnect } }) => {
            const user = await UserConnect.update(args)

            return { id, name, password_hash, email } = user
        },
        destroyUser: async (_, args, { helpers: { UserConnect } }) => {
            const user = await UserConnect.destroy(args)

            return user
        },
        // Product
        storeProduct: async (_, args, { helpers: { ProductConnect } }) => {
            const product = await ProductConnect.store(args)

            return { id, name, password_hash, email } = product
        },
        updateProduct: async (_, args, { helpers: { ProductConnect } }) => {
            const product = await ProductConnect.update(args)

            return { id, name, price, image_url, description } = product
        },
        destroyProduct: async (_, args, { helpers: { ProductConnect } }) => {
            const product = await ProductConnect.destroy(args)

            return product
        }
    }
}

module.exports = resolvers
