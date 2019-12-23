const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Auth {
		token: String
	}

	input AuthInput {
		name: String
		email: String
		password: String
	}

	extend type Mutation {
		loginUser(data: AuthInput!): Auth
		# updatePayload(id: ID!, input: AuthInput): User
	}
`;

module.exports = typeDefs;
