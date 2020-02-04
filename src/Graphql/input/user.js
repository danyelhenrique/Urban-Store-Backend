import { gql } from 'apollo-server-express'
const typeDefs = gql`
	input UserInput {
		name: String
		email: String
		password: String
		avatar_url: String

	}
`

export default typeDefs
