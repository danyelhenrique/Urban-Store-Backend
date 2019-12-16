const { gql } = require('apollo-server-express')

const typeInput = require('./index')

const typeQuery = gql`
	extend type Query {
		indexProduct(offset: String, limit: String): ${typeInput}
	}
`
module.exports = typeQuery
