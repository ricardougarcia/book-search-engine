import gql from "graphql-tag";

export const SAVE_BOOK = gql`
    mutation saveBook(payload?) {
        {
            _id
        authors
        description
        bookId
        image
        link
        title
            }
        }
`;
