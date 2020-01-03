import { gql } from 'apollo-server-express';
const typeQuery = gql`
	directive @isAuthenticate on FIELD_DEFINITION

	extend type Query {
		indexProduct(page: Int, limit: Int): [Product]
		showProduct(id: ID!): Product @isAuthenticate
	}
`;
export default typeQuery;
