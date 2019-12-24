import { gql } from 'apollo-server-express'
const typeDefs = gql`
	type Purchase {
		id: ID
		user_id: ID!
		product_id: ID!
		user: User
	}
`

export default typeDefs
