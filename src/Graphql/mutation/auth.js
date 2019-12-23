const { gql } = require('apollo-server-express');

const typeDefs = gql`
	extend type Mutation {
		loginUser(data: AuthInput!): Auth
	}
`;

module.exports = typeDefs;
