import axios from "axios";
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT } from '../constants/usersConstant';
import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from "../constants/usersConstant";

export const loginUser = (email, password) => async (dispatch) => {
    try{
        dispatch({ type: USER_LOGIN_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        console.log('cvb')
        
        const { data } = await axios.post('http://localhost:5000/api/users/login', { email: email, password: password }, config); 

        dispatch({ 
            type: USER_LOGIN_SUCCESS,
            payload: data 
         }); 

        localStorage.setItem('userInfo', JSON.stringify(data));
    }catch(error){
        dispatch({ 
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
         });
    }
}   

export const logoutUser = () => async (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({
        type: USER_LOGOUT
    });
}

export const registerUser = (name, email, password) => async (dispatch) => {
    try{
        dispatch({ type: USER_REGISTER_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        console.log('cvb')
        
        const { data } = await axios.post('http://localhost:5000/api/users/register', { name: name, email: email, password: password }, config); 

        dispatch({ 
            type: USER_REGISTER_SUCCESS,
            payload: data 
         }); 

        localStorage.setItem('userInfo', JSON.stringify(data));
    }catch(error){
        dispatch({ 
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
         });
    }
} 