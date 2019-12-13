require('./config/dotenv')
require('./config/mongoDb')
require('./database')

const express = require('express')
const { resolve } = require('path')
const { ApolloServer } = require('apollo-server-express')
const UserConnect = require('./app/connects/user')
const ProductConnect = require('./app/connects/product')
const PurchaseConnect = require('./app/connects/purchase')

const typeDefs = require('./app/schemas')
const resolvers = require('./app/resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
        return {
            helpers: { UserConnect, ProductConnect, PurchaseConnect }
        }
    }
})

const app = express()
const PORT = process.env.PORT || 3333

app.use(express.static('./public/models'))
app.use(express.urlencoded({ extended: true }))

const image = resolve(__dirname, './public/models')

const path = '/graphql'

server.applyMiddleware({ app, path })

app.get('/oi', (req, res) => {
    res.sendfile(image + '/boy1.jpg')
})

app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
)
