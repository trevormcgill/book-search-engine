import { gql } from '@apollo/client';

export const GET_ME = gql`
  query {
    me {
      _id
      email
      password
      username
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }
`;