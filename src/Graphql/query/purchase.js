const { gql } = require('apollo-server-express');

const typeDefs = gql`
	extend type Query {
		indexPurchase(offset: String, limit: String): [User]
		showPurchase(id: ID!): Product
	}
`;

module.exports = typeDefs;
