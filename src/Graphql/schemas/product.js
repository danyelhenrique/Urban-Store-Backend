import { gql } from 'apollo-server-express'
import Product from '../js/product'
const typeDefs = gql`
	type Product {
		${Product}
	}

    input ProductInput {
		${Product}
	}

    extend type Mutation {
		storeProduct(input: ProductInput!): Product
		destroyProduct(id: ID!): Boolean
		updateProduct(id: ID!, input: ProductInput): Product
	}

    extend type Query {
        indexProduct(page: Int, limit: Int): [Product]
        showProduct(where: ProductInput): Product
	}
`

export default typeDefs
