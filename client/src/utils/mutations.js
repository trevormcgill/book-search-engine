/* import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      user {
        email
        password
        username
        savedBooks {
          link
          title
          image
          description
          bookId
          authors
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String, $email: String, $password: String) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        savedBooks {
          title
          link
          image
          description
          bookId
          authors
        }
        email
        password
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: bookInput) {
    saveBook(bookData: $bookData) {
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

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID) {
    removeBook(bookId: $bookId) {
      email
      username
      savedBooks {
        title
        link
        image
        description
        bookId
        authors
      }
    }
  }
`; */




/* 

import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation ADD_USER($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        user {
            username,
            email,
        }
        token
}
  }
`

export const LOGIN_USER = gql`
mutation LOGIN_USER($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        user {
            username
            _id
        }
        token
    }
}
`

export const SAVE_BOOK = gql`
mutation Mutation($input: BookInput) {
  saveBook(BookInput: $input) {
    _id
    username
    email
    bookCount
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
`

export const REMOVE_BOOK = gql`
mutation Mutation($bookId: ID!) {
    removeBook(bookId: $bookId) {
        savedBooks {
        bookId
        }
    }
}
` */

import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`

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
`

export const SAVE_BOOK = gql`
mutation Mutation($input: BookInput) {
  saveBook(BookInput: $input) {
    _id
    username
    email
    bookCount
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
`

// remove book from user's list
export const REMOVE_BOOK = gql`
mutation Mutation($bookId: ID!) {
    removeBook(bookId: $bookId) {
        savedBooks {
        bookId
        }
    }
}
`