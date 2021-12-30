const { AuthenticationError } = require("apollo-server-express");
const { User, Book } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      // if they have a token
      if (context.user) {
        return User.findOne();
      }
    },
  },

  Mutation: {
    saveBook: async (parent, args, context) => {
      // if they have a token
      if (context.user) {
        return Book.findOne();
      }
    },
  },
};

module.exports = resolvers;
