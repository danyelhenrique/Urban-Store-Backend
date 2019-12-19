const { makeExecutableSchema } = require('apollo-server')
const resolvers = require('../resolvers')

const Product = require('./Product')
const Purchase = require('./Purchase')
const User = require('./User')
const ProductQuery = require('./Product/query')
const ProductMutation = require('./Product/mutation')
const ProductInput = require('./Product/input')
const Root = require('./root')

const typeDefs = [ Root, Product, ProductQuery, ProductMutation, ProductInput, User, Purchase ]

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
})
module.exports = schema
