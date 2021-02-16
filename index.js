const { GraphQLServer } = require('graphql-yoga')
const resolvers = require('./resolvers/index')

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers
})

return server.start(({ port }) => console.log(`http://localhost:${port}`))
