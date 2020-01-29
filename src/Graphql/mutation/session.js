import { gql } from 'apollo-server-express'
const typeDefs = gql`
    extend type Mutation {
        loginUser(data: AuthInput!): TokenIsValid
    }
`

export default typeDefs
