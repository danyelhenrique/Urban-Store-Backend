require('./Config/dotenv');
require('./Config/mongoDb');
require('./Database');

const { ApolloServer } = require('apollo-server-express');
const express = require('express');

const UserController = require('./Api/controllers/user');
const ProductController = require('./Api/controllers/product');
const PurchaseController = require('./Api/controllers/purchase');
// eslint-disable-next-line no-global-assign

const helpers = { UserController, ProductController, PurchaseController };

const schema = require('./Graphql');

const server = new ApolloServer({
	schema,
	context: async ({ req }) => {
		const token = req.headers.authentication;
		return {
			helpers,
			token
		};
	}
});

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.urlencoded({ extended: true }));

server.applyMiddleware({ app });

app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`));
