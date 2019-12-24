import { gql } from 'apollo-server-express';
const typeDefs = gql`
	input updatePurchase {
		userId: ID!
		prodId: ID!
		oldProdId: ID!
		purchaseId: ID!
	}
`;

export default typeDefs;
