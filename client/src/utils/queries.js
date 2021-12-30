import gql from "graphql-tag";

// Query to get one user.
export const GET_USER = gql`
  {
    user {
      _id
      username
      email
      password
      savedBooks {
        # book typedef
        _id
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
