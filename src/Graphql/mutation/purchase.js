import { gql } from 'apollo-server-express';
const typeDefs = gql`
	extend type Mutation {
		storePurchase(user_id: ID!, product_id: ID!): Purchase
		destroyPurchase(userId: ID!): Boolean
		updatePurchase(userId: ID!, prodId: ID!, oldProdId: ID!, purchaseId: ID!): User
	}
`;

export default typeDefs;
