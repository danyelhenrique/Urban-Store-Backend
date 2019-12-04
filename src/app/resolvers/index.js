
const resolvers = {
    Query: {
        indexUser: async (_, args, { helpers: { UserConnect } }) => {
            const user = await UserConnect.index(args)

            return user
        },
        showUser: async (_, args, { helpers: { UserConnect } }) => {
            const user = await UserConnect.show(args)
            return { id, name, password_hash, email } = user

        },
        indexPurchase: async (_, args, { helpers: { PurchaseConnect } }) => {
            const pruchase = await PurchaseConnect.index(args)

            return pruchase
        },

        showPurchase: async (_, args, { helpers: { PurchaseConnect } }) => {
            const pruchase = await PurchaseConnect.show(args)
            return pruchase
        },
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
        // Products
        storeProduct: async (_, args, { helpers: { ProductConnect } }) => {
            const product = await ProductConnect.store(args)

            return { id, name, password_hash, email } = product
        },
        updateProduct: async (_, args, { helpers: { ProductConnect } }) => {
            const product = await ProductConnect.update(args)

            return { id, name, price, imageUrl, description } = product
        },
        destroyProduct: async (_, args, { helpers: { ProductConnect } }) => {
            const product = await ProductConnect.destroy(args)

            return product
        },

        //Purchase
        storePurchase: async (_, args, { helpers: { PurchaseConnect } }) => {
            const purchase = await PurchaseConnect.store(args)

            return { product_id, user_id } = purchase
        },

        destroyPurchase: async (_, args, { helpers: { PurchaseConnect } }) => {
            const purchase = await PurchaseConnect.destroy(args)

            return purchase
        },
        removePurchase: async (_, args, { helpers: { PurchaseConnect } }) => {
            const purchase = await PurchaseConnect.remove(args)

            return purchase
        },

    }
}

module.exports = resolvers
