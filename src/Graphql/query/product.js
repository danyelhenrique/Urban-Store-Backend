const { gql } = require('apollo-server-express');

const typeQuery = gql`
	directive @autenticar on FIELD_DEFINITION

	extend type Query {
		indexProduct(offset: String, limit: String): [Product]
		showProduct(id: ID!): Product @autenticar
	}
`;
module.exports = typeQuery;
