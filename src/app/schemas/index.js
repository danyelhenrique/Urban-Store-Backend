const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Mutation {
        storeUser(name: String, password: String, email: String ): User
        updateUser(id: ID!, name: String, password: String, email: String) : User
        destroyUser(id: ID!): Boolean

        storeProduct(name: String!, price: String!, imageUrl: String, description: String!): Product
        updateProduct(id: ID!, name: String, price: String, imageUrl: String, description: String): Product
        destroyProduct(id: ID!): Boolean


         storePurchase(product_id: ID! user_id: ID!): Purchase
         removePurchase(user_id: ID!, product_id: ID! ) : Boolean
         destroyPurchase(user_id: ID! ) : Boolean
    }


    type Query {
        indexUser( offset: String, limit:String) :[User]
        showUser(id: ID!): User

        indexProduct( offset: String, limit:String) :[Product]
        showProduct(id: ID!): Product

        indexPurchase( offset: String, limit:String) :[User]
        showPurchase(id: ID!): [All]
    }

    type All {
        id: String

        name: String

        price: Float

        imageUrl: String

        description: String

        users: [User]

        products: [Product]
    }


    type User {
        id: ID

        name: String

        password_hash: String

        email: String

        createdAt: String

        updatedAt: String

        products: [Product]

    }

    type Product{
        id: String!

        name: String!

        price: Float!

        imageUrl: String!

        description: String!
    }

    type Purchase{
        id: String !

        user_id: String

        product_id: String
    }

`


module.exports = typeDefs