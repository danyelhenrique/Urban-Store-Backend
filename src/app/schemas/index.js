const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
    type Mutation {
        storeUser(name: String, password: String, email: String ): User
        updateUser(id: ID!, name: String, password: String, email: String) : User
        destroyUser(id: ID!): Boolean

        storeProduct(name: String!, price: String!, imageUrl: String, description: String!): Product
        updateProduct(id: ID!, name: String, price: String, imageUrl: String, description: String): Product
        destroyProduct(id: ID!): Boolean
    }


    type Query {
        indexUser( offset: String, limit:String) :[User]
        showUser(id: ID!): User

        indexProduct( offset: String, limit:String) :[Product]
        showProduct(id: ID!): Product
    }


    type User {
        id: String!

        name: String!

        password_hash: String!

        email: String!

        createdAt: String

        updatedAt: String

    }

    type Product{
        id: String!

        name: String!

        price: Float!

        imageUrl: String!

        description: String!
    }

`


module.exports = typeDefs