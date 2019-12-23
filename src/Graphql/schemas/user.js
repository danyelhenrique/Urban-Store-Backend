const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		id: ID
		name: String
		email: String
		products: [Product]
	}
`;

module.exports = typeDefs;
