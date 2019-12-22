const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Purchase {
		id: ID
		user_id: ID!
		product_id: ID!
		user: User
	}

	extend type Query {
		indexPurchase(offset: String, limit: String): [User]
		showPurchase(id: ID!): Product
	}

	input updatePurchase {
		userId: ID!
		prodId: ID!
		oldProdId: ID!
		purchaseId: ID!
	}

	extend type Mutation {
		storePurchase(user_id: ID!, product_id: ID!): Purchase
		destroyPurchase(userId: ID!): Boolean
		updatePurchase(userId: ID!, prodId: ID!, oldProdId: ID!, purchaseId: ID!): User
	}
`;

module.exports = typeDefs;
