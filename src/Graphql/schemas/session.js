import { gql } from 'apollo-server-express'
const typeDefs = gql`
	type Auth {
		token: String
	}
`

export default typeDefs
