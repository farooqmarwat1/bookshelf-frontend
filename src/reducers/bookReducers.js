import { PUBLIC_BOOKS_REQUEST, PUBLIC_BOOKS_SUCCESS, PUBLIC_BOOKS_FAIL } from "../constants/booksConstants";

export const publicBooksReducer = (state = { books: [] }, action) => {     // InitialState
    switch(action.type){   // Evaluate type in action object
        case PUBLIC_BOOKS_REQUEST:
            return { loading: true, books: [] };      // Not Filled Yet
        case PUBLIC_BOOKS_SUCCESS:
            return { loading: false, books: action.payload };
        case PUBLIC_BOOKS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}