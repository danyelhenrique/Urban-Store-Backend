import { gql } from 'apollo-server-express'
const typeDefs = gql`
	extend type Mutation {
		loginUser(data: AuthInput!): Auth
	}
`

export default typeDefs
