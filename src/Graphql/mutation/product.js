const { gql } = require('apollo-server-express');

const typeQuery = gql`
	extend type Mutation {
		storeProduct(input: ProductInput!): Product
		destroyProduct(id: ID!): Boolean
		updateProduct(id: ID!, input: ProductInput): Product
	}
`;
module.exports = typeQuery;
