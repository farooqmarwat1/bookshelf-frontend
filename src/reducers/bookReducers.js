export const publicBooksReducer = (state = { publicBooks: [] }, action) => {     // InitialState
    switch(action.type){   // Evaluate type in action object
        case 'PUBLIC_BOOKS_REQUEST':
            return { loading: true, publicBooks: [] };      // Not Filled Yet
        case 'PUBLIC_BOOKS_SUCCESS':
            return { loading: false, publicBooks: action.payload };
        case 'PUBLLIC_BOOKS_FAIL':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}