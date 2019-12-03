const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
    type Mutation {
        storeUser(name: String, password: String, email: String ): User
        updateUser(id: ID!, name: String, password: String, email: String) : User
        destroyUser(id: ID!): Boolean
    }

    type Query {
        indexUser( offset: String, limit:String) :[User]
        showUser(id: ID!): User
    }


    type User {
        id: String!

        name: String!

        password_hash: String!

        email: String!

        createdAt: String

        updatedAt: String

    }

`


module.exports = typeDefs