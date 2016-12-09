const Pans = require('./handlers')

module.exports = [
  {
    method: 'POST',
    path: '/pans',
    config: Pans.create
  },{
    method: 'GET',
    path: '/pans',
    config: Pans.list
  },{
    method: 'GET',
    path: '/pans/{id}',
    config: Pans.byId
  },{
    method: 'DELETE',
    path: '/pans/{id}',
    config: Pans.delete
  },{
    method: 'PUT',
    path: '/pans/{id}',
    config: Pans.update
  }
];
