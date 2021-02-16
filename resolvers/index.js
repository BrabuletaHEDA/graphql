const Query = require('./Query');
const auth = require('./Mutations/auth')

module.exports = {
    Query,
    Mutation: {
        ...auth
    }
};