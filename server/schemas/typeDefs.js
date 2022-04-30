const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    meals: User
    addresses: [Address]
  } 

  type Auth {
    token: ID!
    user: User
  }

  type Address {
    _id: ID
    addressName: String
    streetName: String
    cityName: String
    state: String
    zipCode: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User

    addresses(username: String): [Address]
    address(_id: ID!): Address
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addAddress(addressName: String!, streetName: String!, cityName: String!, state: String!, zipCode: String!): Address
  }
`;

module.exports = typeDefs;
