const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    age: Int!
    friends: [User]
  }

  type Movies{
    id: ID!
    name: String
    year: Int
  }

  type Query {
    users: [User!]!
    selectedUser(id: ID!): User 
    movies: [Movies!]!
    selectedMovie(year:Int): Movies!
  }

  input CreateUserInput{
    name: String!
    age: Int
  }

  type Mutation {
  createUser(input: CreateUserInput!): User
}

`;

module.exports = { typeDefs };
