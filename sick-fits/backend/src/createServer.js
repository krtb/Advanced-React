const { GraphQlServer } = require('graphql-yoga');
// RESOLVERS
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
// DATABASE
const db = require('./db');
// CREATE GraphQlYoga Server

function createServer(params) {
    return new GraphQlServer({
        typeDefs: './schema.graphql',
        resolvers: {
            Mutation,
            Query
        },
        resolverValidationOptions: {
            requireResolversForResolverType: false
        },
        context: req => ({ ...req, db })
    })
}

module.export = createServer;