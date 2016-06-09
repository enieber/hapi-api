'use strict'

const Users = require('../../models/users')

module.exports.createUser = {
  handler: (request, reply) => {
    Users.forge(request.payload)
      .save()
      .then((user) => reply(user), (err) => reply(err))
  }
}

module.exports.users = {
  handler: (request, reply) => {
    Users.fetchAll()
      .then((user) => reply(user), (err) => reply(err))
  }
}

module.exports.userById = {
  handler: (request, reply) => {
    Users.where({'id': request.params.id})
      .fetch()
      .then((user) => reply(user), (err) => reply(err))
  }
}

module.exports.updateUser = {
  handler: (request, reply) => {
    let req = request.payload 
    
    Users.where({id: request.params.id})
      .save({address: req.address, fone: req.fone}, {patch: true})      
      .then((result) => reply(result), (err) => reply(err))
  }
}
module.exports.deleteUser = {
  handler: (request, reply) => {
    Users.where({'id': request.params.id})
      .destroy()
      .then((user) => reply({user: request.params.id, status: 'deleted'}), (err) => reply({user: request.params.id, status: err}))
   }
} 

