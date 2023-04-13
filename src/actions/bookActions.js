import { PUBLIC_BOOKS_REQUEST, PUBLIC_BOOKS_SUCCESS, PUBLIC_BOOKS_FAIL } from "../constants/booksConstants";
import axios from "axios";

export const booksPublic = () => async (dispatch) => {
    try{
        dispatch({ type: PUBLIC_BOOKS_REQUEST });
        
        const { data } = await axios.get('http://localhost:5000/'); 

        dispatch({ 
            type: PUBLIC_BOOKS_SUCCESS,
            payload: data
         });
    }catch(error){
        dispatch({ 
            type: PUBLIC_BOOKS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
         });
    }
}    