const { gql } = require('apollo-server-express')

const typeQuery = gql`
	extend type Query {
		indexProduct(offset: String, limit: String): [Product]
		showProduct(id: ID!): Product
	}
`
module.exports = typeQuery
