import { gql } from 'apollo-server-express'
const typeDefs = gql`
    type User {
        id: ID
        name: String
        email: String
        avatar_url: String
        products: [Product]
    }

    input UserInput {
        name: String
        email: String
        password: String
        avatar_url: String
    }

    extend type Mutation {
        storeUser(data: UserInput!): User
        destroyUser(id: ID!): Boolean @isAuthenticate
        updateUser(id: ID!, input: UserInput): TokenIsValid @isAuthenticate
    }

    extend type Query {
        indexUser(offset: String, limit: String): [User]
        showUser(id: ID!): User
    }
`

export default typeDefs
