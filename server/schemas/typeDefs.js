const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    authors: [String]
    description: String!
    bookId: ID!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    # saveBook: Book
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    # next queries will use context becuase we are already logged in
  }
`;

module.exports = typeDefs;
