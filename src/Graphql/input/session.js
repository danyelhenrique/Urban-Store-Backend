import { gql } from 'apollo-server-express'
const typeDefs = gql`
	input AuthInput {
		email: String!
		password: String!
	}
`

export default typeDefs
