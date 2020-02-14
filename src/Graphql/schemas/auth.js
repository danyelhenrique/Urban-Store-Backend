import { gql } from 'apollo-server-express'
const typeDefs = gql`
    scalar TokenIsValid

    type Auth {
        token: String
    }

    input AuthInput {
        email: String!
        password: String!
    }

    extend type Mutation {
        loginUser(data: AuthInput!): TokenIsValid
    }

    extend type Query {
        validateToken(token: String): TokenIsValid
    }
`

export default typeDefs
