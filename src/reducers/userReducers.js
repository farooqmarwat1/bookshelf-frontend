import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT } from '../constants/usersConstant';

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
