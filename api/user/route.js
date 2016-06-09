const User = require('./handlers')

module.exports = [
    { 
      method: 'POST', 
      path: '/users', 
      config: User.createUser 
    },{ 
      method: 'GET', 
      path: '/users', 
      config: User.users 
    },{ 
      method: 'GET',     
      path: '/users/{id}', 
      config: User.userById 
    },{ 
      method: 'DELETE', 
      path: '/users/{id}', 
      config: User.deleteUser 
    },{
      method: 'PUT',
      path: '/users/{id}',
      config: User.updateUser
    }
]
