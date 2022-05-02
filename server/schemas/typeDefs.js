const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    meals: User
    addresses: [Address]
  } 

  type Meals {
    _id: ID
    name: String
    price: Int
    mealType: String
    description: String
  }

  type Review {
    _id: ID
    reviewText: String
    createdAt: String
    username: String
    meals: [Meals]
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
    meals(_id: ID!): Meals
    review(_id: ID!): Review
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addAddress(addressName: String!, streetName: String!, cityName: String!, state: String!, zipCode: String!): Address
  }
`;

module.exports = typeDefs;
