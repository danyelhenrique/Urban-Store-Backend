import { makeExecutableSchema } from 'apollo-server'
import SessionDirective from './directives/session'
import * as schemas from './schemas'
import resolvers from './resolvers'

const typeDefs = Object.values(schemas)

const schema = makeExecutableSchema({
    typeDefs,

    resolvers,
    schemaDirectives: {
        isAuthenticate: SessionDirective
    }
})
export default schema
