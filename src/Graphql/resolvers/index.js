import query from './query'
import mutation from './mutation'

const resolvers = { ...query, ...mutation }

export default resolvers
