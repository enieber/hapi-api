'use strict'

const Users = require('../../models/users')
const Joi = require('joi');
const Boom = require('boom');

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

module.exports.login = {
  validate: {
    payload: {
      email: Joi.string().email().required(),
      password: Joi.string().min(2).max(200).required()
    }
  },
  handler: (request, replay) => {
    getValidatedUser(request.payload.email, request.payload.password)
      .then(function(user) {
        if (user) {
          request.auth.session.set(user);
          return reply('Login Successful!');
        } else {
          return reply(Boom.unauthorized('Bad email or password'));
        }
      })
      .catch(function(err){
        return reply(Boom.badImplementation());
      });
  }
}
