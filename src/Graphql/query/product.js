import { gql } from 'apollo-server-express';
const typeQuery = gql`
	directive @isAuthenticate on FIELD_DEFINITION

	extend type Query {
		indexProduct(offset: String, limit: String): [Product]
		showProduct(id: ID!): Product @isAuthenticate
	}
`;
export default typeQuery;
