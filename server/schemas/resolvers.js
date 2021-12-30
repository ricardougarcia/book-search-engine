const { AuthenticationError } = require("apollo-server-express");
const { User, Book } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      // if they have a token
      if (context.user) {
        return await User.findOne({ _id: context.user._id }).select(
          "-password"
        );
      }
      throw new AuthenticationError("You're not logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, args, context) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { user, token };
    },
    login: async (parent, { email, password }, context) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError("Cannot find user");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError("Cannot find user");
      }
      const token = signToken(user);
      return { user, token };
    },

    // saveBook: async (parent, args, context) => {
    //   // if they have a token
    //   if (context.user) {
    //     return await Book.findOne();
    //   }
    // },
  },
};

module.exports = resolvers;
