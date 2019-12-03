require('./config/dotenv')
require('./config/mongoDb')

const express = require('express')
const { ApolloServer } = require('apollo-server-express');
const UserConnect = require('./app/connects/user')
const ProductConnect = require('./app/connects/product')


const typeDefs = require('./app/schemas')
const resolvers = require('./app/resolvers')


const server = new ApolloServer({
    typeDefs, resolvers,
    context: async ({ req }) => {
        return {
            helpers: { UserConnect, ProductConnect }
        }
    }
});

const app = express()
const PORT = process.env.PORT || 3333

app.use(express.urlencoded({ extended: true }))

const path = '/graphql';

server.applyMiddleware({ app, path });

app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
