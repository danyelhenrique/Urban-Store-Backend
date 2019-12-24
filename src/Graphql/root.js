import { gql } from 'apollo-server-express';

const typeRoot = gql`
	type Query {
		root: String!
	}

	type Mutation {
		root: String!
	}
`;

export default typeRoot;
