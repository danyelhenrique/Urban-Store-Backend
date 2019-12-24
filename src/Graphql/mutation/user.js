import { gql } from 'apollo-server-express'
const typeDefs = gql`
	extend type Mutation {
		storeUser(data: UserInput!): User
		destroyUser(id: ID!): Boolean
		updateUser(id: ID!, input: UserInput): User
	}
`

export default typeDefs
