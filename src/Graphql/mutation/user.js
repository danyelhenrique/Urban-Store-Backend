import { gql } from 'apollo-server-express'
const typeDefs = gql`
	extend type Mutation {
		storeUser(data: UserInput!): User
		destroyUser(id: ID!): Boolean
		updateUser(id: ID!, input: UserInput): TokenIsValid
	}
`

export default typeDefs
