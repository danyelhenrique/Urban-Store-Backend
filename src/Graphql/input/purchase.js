const { gql } = require('apollo-server-express');

const typeDefs = gql`
	input updatePurchase {
		userId: ID!
		prodId: ID!
		oldProdId: ID!
		purchaseId: ID!
	}
`;

module.exports = typeDefs;
