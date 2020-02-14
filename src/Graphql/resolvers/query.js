import { parseResolveInfo } from 'graphql-parse-resolve-info'
import Auth from '../../Auth/auth'

const resolvers = {
    Query: {
        validateToken(_, { token }) {
            const user = Auth.authenticate(token)
            return user
        },
        indexProduct(_, args, { helpers: { ProductController } }, info) {
            const parseInfo = parseResolveInfo(info)

            const parseItems = parseInfo.fieldsByTypeName.Product
            args.filds = Object.keys(parseItems)

            const product = ProductController.index(args)
            return product
        },
        showProduct(_, args, { helpers: { ProductController } }, info) {
            const parseInfo = parseResolveInfo(info)
            const parseItems = parseInfo.fieldsByTypeName.Product
            args.filds = Object.keys(parseItems)

            const product = ProductController.show(args)

            return product
        },
        indexUser(_, args, { helpers: { UserController } }) {
            const User = UserController.index(args)
            return User
        },
        showUser(_, args, { helpers: { UserController } }) {
            const User = UserController.show(args)
            return User
        },
        indexPurchase(_, args, { helpers: { PurchaseController } }, info) {
            const parseInfo = parseResolveInfo(info)
            const parseItems = parseInfo.fieldsByTypeName.User
            const parsefildProd = parseItems.products.fieldsByTypeName.Product
            args.items = Object.keys(parsefildProd)

            const purchase = PurchaseController.index(args)
            return purchase
        },
        showPurchase(_, args, { helpers: { PurchaseController } }, info) {
            const parseInfo = parseResolveInfo(info)

            const parseItems = parseInfo.fieldsByTypeName.Product
            args.items = Object.keys(parseItems)

            const purchase = PurchaseController.show(args)
            return purchase
        }
    }
}
export default resolvers
