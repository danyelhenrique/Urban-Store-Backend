import { gql } from 'apollo-server-express'
const typeDefs = gql`
    scalar storePurchaseUser
    extend type Mutation {
        storePurchase(
            userId: ID!
            productIds: [ProductIdsIntpu!]!
        ): storePurchaseUser

        destroyPurchase(userId: ID!): Boolean

        updatePurchase(
            userId: ID!
            prodId: ID!
            oldProdId: ID!
            purchaseId: ID!
        ): User
    }

    input ProductIdsIntpu {
        id: ID!
        qnt: Int!
    }
`

export default typeDefs
