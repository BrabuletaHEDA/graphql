const { USERS } = require('../../data')
const uniqid = require('uniqid');

const auth = {
    signupUser: (_, { name, email, language, occupation }) => {

        const user = { 
            id: uniqid(),
            name,
            email,
            language,
            occupation
        }
    
        const emailAlreadyExists = USERS.find(user => user.email === email)
    
        if(emailAlreadyExists) {
            throw new Error('This email already exists')
        }
    
        USERS.push(user)
    
        return user;
    }
}

module.exports = auth;