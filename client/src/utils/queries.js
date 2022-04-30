import { gql } from '@apollo/client';

export const QUERY_ADDRESSES = gql`
  query addresses($username: String) {
    addresses(username: $username) {
      _id
      addressName
      streetName
      cityName
      state
      zipCode
    }
  }
`

export const QUERY_ADDRESS = gql`
  query address($id: ID!) {
    address(_id: $id) {
      _id
      addressName
      streetName
      cityName
      state
      zipCode
    }
  }
`

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      addresses {
        _id
        addressName
        streetName
        cityName
        state
        zipCode
      }
      meals {
        _id
        reviewText
        createdAt
      }
    }
  }
`;


export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      meals {
        _id
        reviewText
        createdAt
        reactions {
          _id
          createdAt
          reactionBody
          username
        }
      }
      addresses {
        _id
        addressName
        streetName
        cityName
        state
        zipCode
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_MEALS = gql`
  query meals($username: String) {
    meals(username: $username) {
      _id
      reviewText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const QUERY_MEAL = gql`
  query meal($id: ID!) {
    meal(_id: $id) {
      _id
      reviewText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

