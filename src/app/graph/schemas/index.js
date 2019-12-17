const { makeExecutableSchema } = require('apollo-server')
const resolvers = require('../resolvers')

const Product = require('./Product')
const ProductQuery = require('./Product/query')
const ProductMutation = require('./Product/mutation')
const ProductInput = require('./Product/input')
const Root = require('./root')

const typeDefs = [ Root, Product, ProductQuery, ProductMutation, ProductInput ]

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
})
module.exports = schema
