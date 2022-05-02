const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    meals: User
<<<<<<< HEAD
    addresses: [Address]
  } 
=======
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
    meals [mealSchema]
  }

  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }
>>>>>>> 2266e48bc9ca5ea3633f4dc28f42d324c90f7e29

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
<<<<<<< HEAD
    addresses(username: String): [Address]
    address(_id: ID!): Address
=======
    meals(_id: ID!): Meals
    review(_id: ID!): Review
>>>>>>> 2266e48bc9ca5ea3633f4dc28f42d324c90f7e29
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addAddress(addressName: String!, streetName: String!, cityName: String!, state: String!, zipCode: String!): Address
  }
`;

module.exports = typeDefs;
