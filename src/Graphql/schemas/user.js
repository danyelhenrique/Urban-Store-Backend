import { gql } from 'apollo-server-express'
const typeDefs = gql`
	type User {
		id: ID
		name: String
		email: String
		products: [Product]
	}
`

export default typeDefs
