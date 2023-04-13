import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT } from '../constants/usersConstant';
import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from '../constants/usersConstant';

export const userLoginReducer = (state = {  }, action) => {     // InitialState
    switch(action.type){   // Evaluate type in action object
        case USER_LOGIN_REQUEST:
            return { loading: true };      // Not Filled Yet
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT:
            return { };
        default:
            return state;
    }
}

export const userRegisterReducer = (state = {  }, action) => {     // InitialState
    switch(action.type){   // Evaluate type in action object
        case USER_REGISTER_REQUEST:
            return { loading: true };      // Not Filled Yet
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    } 
}