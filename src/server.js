require('./config/dotenv')
require('./config/mongoDb')
require('./database')

const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const UserConnect = require('./app/graph/connects/user')
const ProductConnect = require('./app/graph/connects/product')
// const PurchaseConnect = require('./app/graph/connects/purchase')

const schema = require('./app/graph/schemas')

const server = new ApolloServer({
	schema,
	context: async ({ req }) => {
		return {
			helpers: { ProductConnect, UserConnect }
		}
	}
})

const app = express()
const PORT = process.env.PORT || 3333

app.use(express.urlencoded({ extended: true }))

server.applyMiddleware({ app })

app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`))
