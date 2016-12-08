const Pans = require('./handlers')

module.exports = [
  {
    method: 'POST',
    path: '/pans',
    config: Pans.createUser
  },{
    method: 'GET',
    path: '/pans',
    config: Pans.users
  },{
    method: 'GET',
    path: '/pans/{id}',
    config: Pans.userById
  },{
    method: 'DELETE',
    path: '/pans/{id}',
    config: Pans.deleteUser
  },{
    method: 'PUT',
    path: '/pans/{id}',
    config: Pans.updateUser
  }
];
