const { gql } = require('apollo-server-express');

const typeDefs = gql`
	input UserInput {
		name: String
		email: String
		password: String
	}
`;

module.exports = typeDefs;
