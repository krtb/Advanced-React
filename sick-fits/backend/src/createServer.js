const { GraphQLServer } = require('graphql-yoga');
// RESOLVERS
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
// DATABASE
const db = require('./db');
// CREATE GraphQlYoga Server

function createServer() {
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            Mutation,
            Query,
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false,
        },
        context: req => ({ ...req, db }),
    });
}

module.exports = createServer;