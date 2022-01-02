import gql from "graphql-tag";

// export const SAVE_BOOK = gql`
//     mutation saveBook(payload?) {
//         {
//             _id
//         authors
//         description
//         bookId
//         image
//         link
//         title
//             }
//         }
// `;
export const DELETE_BOOK = gql`
  mutation deleteBook($bookId: ID!) {
    deleteBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        # book typedef
        authors
        description
        bookId
        image
        link
        title
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
