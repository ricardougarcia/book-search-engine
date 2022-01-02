import gql from "graphql-tag";

// Query to get one user.
export const QUERY_ME = gql`
  {
    me {
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
