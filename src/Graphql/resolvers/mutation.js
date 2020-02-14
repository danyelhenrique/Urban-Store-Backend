import { parseResolveInfo } from 'graphql-parse-resolve-info'
import Auth from '../../Auth/auth'

const resolvers = {
    Mutation: {
        storeProduct(_, args, { helpers: { ProductController } }) {
            const product = ProductController.store(args)

            return product
        },
        destroyProduct(_, args, { helpers: { ProductController } }) {
            const product = ProductController.destroy(args)
            return product
        },

        updateProduct(_, args, { helpers: { ProductController } }) {
            const product = ProductController.update(args)

            return product
        },
        loginUser(_, args) {
            const user = Auth.signIn(args)

            return user
        },
        storeUser(_, args, { helpers: { UserController } }) {
            const user = UserController.store(args)

            return user
        },
        destroyUser(_, args, { helpers: { UserController } }) {
            const user = UserController.destroy(args)

            return user
        },
        updateUser(_, args, { helpers: { UserController, token } }) {
            const user = UserController.update(args)

            return user
        },

        storePurchase(_, args, { helpers: { PurchaseController } }) {
            const purchase = PurchaseController.store(args)

            return purchase
        },
        destroyPurchase(_, args, { helpers: { PurchaseController } }) {
            const purchase = PurchaseController.destroy(args)

            return purchase
        },
        updatePurchase(_, args, { helpers: { PurchaseController } }, info) {
            const parseInfo = parseResolveInfo(info)

            const parseItems = parseInfo.fieldsByTypeName.User.products
            const finalPaser = parseItems.fieldsByTypeName.Product
            args.items = Object.keys(finalPaser)
            const purchase = PurchaseController.update(args)

            return purchase
        }
    }
}

export default resolvers
