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
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
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
