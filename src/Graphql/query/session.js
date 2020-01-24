import { gql } from "apollo-server-express"
const typeDefs = gql`
    scalar TokenIsValid
    extend type Query {
        validateToken(token: String): TokenIsValid
    }
`

export default typeDefs
