import './Config/dotenv';
import './Config/mongoDb';
import './Database';
import UserController from './Api/controllers/user';
import ProductController from './Api/controllers/product';
import PurchaseController from './Api/controllers/purchase';

import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import schema from './Graphql';

const helpers = { UserController, ProductController, PurchaseController };

class Server {
	constructor() {
		// eslint-disable-next-line no-unused-vars
		let apollo;
		this.app = express();
		this.server();
		this.middlewares();
	}

	server() {
		this.apollo = new ApolloServer({
			schema,
			context: async ({ req }) => {
				const token = req.headers.authentication;
				return {
					helpers,
					token
				};
			}
		});

		this.app.graphqlUrl = this.apollo.graphqlPath;
	}

	middlewares() {
		const app = this.app;
		this.app.use(express.urlencoded({ extended: true }));
		this.apollo.applyMiddleware({ app });
	}
}

export default new Server().app;
