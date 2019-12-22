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

	extend type Mutation {
		storePurchase(user_id: ID!, product_id: ID!): Purchase
		# destroyPurchase(id: ID!): Boolean
		# updatePurchase(id: ID!, input: PurchaseInput): Purchase
	}
`;

module.exports = typeDefs;
