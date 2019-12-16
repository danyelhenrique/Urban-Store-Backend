const { gql } = require('apollo-server-express')

const typeRoot = gql`
	type Query {
		root: String!
	}

	type Mutation {
		root: String!
	}
`

module.exports = typeRoot
