const { gql } = require('apollo-server-express');

const typeDefs = gql`
	extend type Mutation {
		storeUser(data: UserInput!): User
		destroyUser(id: ID!): Boolean
		updateUser(id: ID!, input: UserInput): User
	}
`;

module.exports = typeDefs;
