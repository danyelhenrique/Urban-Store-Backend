require('./config/dotenv')
require('./config/mongoDb')

const express = require('express')
const { ApolloServer } = require('apollo-server-express');
const Connects = require('./app/connects')


const User = require('./app/models/User')

const typeDefs = require('./app/schemas')
const resolvers = require('./app/resolvers')


const server = new ApolloServer({
    typeDefs, resolvers,
    context: async ({ req }) => {
        return {
            models: { User },
            helpers: { Connects }
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
