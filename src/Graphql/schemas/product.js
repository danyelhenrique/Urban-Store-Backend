import { gql } from 'apollo-server-express'
import Product from '../js/product'
const typeDefs = gql`
    directive @isAuthenticate on FIELD_DEFINITION

	type Product {
		${Product}
	}

    input ProductInput {
		${Product}
	}

    extend type Mutation { 
		storeProduct(input: ProductInput!): Product @isAuthenticate
		destroyProduct(id: ID!): Boolean @isAuthenticate
		updateProduct(id: ID!, input: ProductInput): Product @isAuthenticate
	}

    extend type Query {
        indexProduct(page: Int, limit: Int): [Product]
        showProduct(where: ProductInput): Product
	}
`

export default typeDefs
