import { gql } from 'apollo-server-express'
const typeDefs = gql`
	input AuthInput {
		name: String!
		email: String!
		password: String!
	}
`

export default typeDefs
