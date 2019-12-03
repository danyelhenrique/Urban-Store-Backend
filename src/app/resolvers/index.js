
const resolvers = {
    Query: {
        indexUser: async (_, args, { helpers: { Connects } }) => {
            const user = await Connects.UserConnect.index(args)
            console.log(user);

            // const { id, name, password_hash, email } = await user
            return user
        },
        showUser: async (_, args, { helpers: { Connects } }) => {
            const user = await Connects.UserConnect.show(args)
            return { id, name, password_hash, email } = user

        }
    },
    Mutation: {
        storeUser: async (_, args, { helpers: { Connects } }) => {
            const user = await Connects.UserConnect.store(args)

            return { id, name, password_hash, email } = user
        },
        updateUser: async (_, args, { helpers: { Connects } }) => {
            const user = await Connects.UserConnect.update(args)

            return { id, name, password_hash, email } = user
        },
        destroyUser: async (_, args, { helpers: { Connects } }) => {
            const user = await Connects.UserConnect.destroy(args)

            return user
        }
    }
}

module.exports = resolvers
