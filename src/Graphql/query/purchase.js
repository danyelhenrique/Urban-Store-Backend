import { gql } from 'apollo-server-express';
const typeDefs = gql`
	extend type Query {
		indexPurchase(offset: String, limit: String): [User]
		showPurchase(id: ID!): Product
	}
`;

export default typeDefs;
