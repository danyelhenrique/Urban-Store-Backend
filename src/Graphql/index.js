// import Root from './root'

import { makeExecutableSchema } from 'apollo-server'
import SessionDirective from './directives/session'
import * as schemas from './schemas'
// import { productQuery, purchaseQuery, userQuery, sessionQuery } from './query'
// import { session, product, purchase, user } from './input'
// import { sessionMutation, productMutation, purchaseMutation, userMutation } from './mutation'
import resolvers from './resolvers'

// const typeDefs = [
//     Root,
//     sessionSchema,
//     productSchema,
//     purchaseSchema,
//     userSchema,
//     userSchema
// ]

const typeDefs = Object.values(schemas)

console.log(typeDefs)

const schema = makeExecutableSchema({
    typeDefs,

    resolvers,
    schemaDirectives: {
        isAuthenticate: SessionDirective
    }
})
export default schema
