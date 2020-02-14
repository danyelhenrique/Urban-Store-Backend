import { gql } from 'apollo-server-express'
const typeDefs = gql`
    scalar storePurchaseUser

    type Purchase {
        id: ID
        user_id: ID!
        product_id: ID!
        user: User
    }

    input updatePurchase {
        userId: ID!
        prodId: ID!
        oldProdId: ID!
        purchaseId: ID!
    }

    input ProductIdsIntpu {
        id: ID!
        qnt: Int!
    }

    extend type Mutation {
        storePurchase(
            userId: ID!
            productIds: [ProductIdsIntpu!]!
        ): storePurchaseUser @isAuthenticate

        destroyPurchase(userId: ID!): Boolean @isAuthenticate

        updatePurchase(
            userId: ID!
            prodId: ID!
            oldProdId: ID!
            purchaseId: ID!
        ): User @isAuthenticate
    }

    extend type Query {
        indexPurchase(offset: String, limit: String): [User]
        showPurchase(id: ID!): Product
    }
`

export default typeDefs
