import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ADDRESS =gql`
  mutation addAddress($addressName: String!, $streetName: String!, $cityName: String!, $state: String!, $zipCode: String!) {
    addAddress(addressName: $addressName, streetName: $streetName, cityName: $cityName, state: $state, zipCode: $zipCode) {
      _id
      addressName
      streetName
      cityName
      state
      zipCode
    }
  }
`

export const ADD_REVIEW = gql`
  mutation addReview($reviewText: String!, $mealName: String!, $username: String!) {
    addReview(reviewText: $reviewText, mealName: $mealName, username: $username) {
      _id
      reviewText
      createdAt
      username
      mealName
    }
  }
`

export const EDIT_ADDRESS = gql`
  mutation editAddress($_id: ID!, $addressName: String!, $streetName: String!, $cityName: String!, $state: String!, $zipCode: String!){
    editAddress(_id: $_id, addressName: $addressName, streetName: $streetName, cityName: $cityName, state: $state, zipCode: $zipCode) {
      _id
      addressName
      streetName
      cityName
      state
      zipCode
    }
  }
`

export const DELETE_ADDRESS = gql`
  mutation deleteAddress($_id: ID!){
    deleteAddress(_id: $_id)
  }
`