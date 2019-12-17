const { gql } = require('apollo-server-express')

// const User =

const typeDefs = gql`
	type User {
		name: String
		email: String
	}

	extend type Query {
		indexUser(offset: String, limit: String): [User]
		showUser(id: ID!): User
	}

	input UserInput {
		name: String
		email: String
		password: String
	}

	extend type Mutation {
		storeUser(data: UserInput!): User
		destroyUser(id: ID!): Boolean
		updateUser(id: ID!, input: UserInput): User
	}
`

module.exports = typeDefs
