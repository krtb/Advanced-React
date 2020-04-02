// PRISMA SERVER
//  CONNECTS TO REMOTE PRISMA DB
// and GIVES ABILITY TO QUERY WITH JS
const { Prisma } = require('prisma-binding'); 
// using require, was no import in Node. 
// Could use Babel or ESM to import. This is latest Node.js standard

const db = new Prisma({
    typeDefs: './generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: false
})

module.exports = db