const { makeExecutableSchema } = require('apollo-server');
const AuthDirective = require('./directives/auth');

// const Auth = require('./auth');
// const Product = require('./product');
// const Purchase = require('./purchase');
// const User = require('./user');
// const ProductQuery = require('./product/query');
// const ProductMutation = require('./Product/mutation');
// const ProductInput = require('./Product/input');
const Root = require('./root');
const { authSchema, productSchema, purchaseSchema, userSchema } = require('./schemas');
const { productQuery, purchaseQuery, userQuery } = require('./query');
const { auth, product, purchase, user } = require('./input');
const { authMutation, productMutation, purchaseMutation, userMutation } = require('./mutation');
const resolvers = require('./resolvers');
// const typeDefs = [ Root, Product, ProductQuery, ProductMutation, ProductInput, User, Purchase, Auth ];
const typeDefs = [
	Root,
	authSchema,
	productSchema,
	purchaseSchema,
	userSchema,
	productQuery,
	purchaseQuery,
	userQuery,
	authMutation,
	productMutation,
	purchaseMutation,
	userMutation,
	auth,
	product,
	purchase,
	user
];

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
	schemaDirectives: {
		autenticar: AuthDirective
	}
});
module.exports = schema;
