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