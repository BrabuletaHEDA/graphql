const { USERS, DOGS } = require('../data')

const Query = {
    user: (_, args) => USERS.find(user => user.id === args.id),
    dog: (_, args) => DOGS.find(dog => dog.id === args.id),

    users: () => USERS,
    dogs: () => DOGS
}

module.exports = Query;