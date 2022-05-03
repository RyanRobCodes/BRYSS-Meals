const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    meals: [Meal]
    addresses: [Address]
    reviews: [Review]
  } 

  type Meal {
    _id: ID
    name: String
    price: Int
    mealType: String
    description: String
    image: String
    reviews: [Review]
  }

  type Review {
    _id: ID
    reviewText: String
    createdAt: String
    username: String
    mealName: String
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
    meals: [Meal]
    meal(_id: ID!): Meal
    review(_id: ID!): Review
    reviews(username: String, mealName: String): [Review]
    allReviews: [Review]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addAddress(addressName: String!, streetName: String!, cityName: String!, state: String!, zipCode: String!): Address
    addMeals(name: String!, price: Int!, mealType: String!, description: String!, image: String!): Meal
    addReview(reviewText: String!, mealName: String!, username: String!): Review
  }
`;

module.exports = typeDefs;
