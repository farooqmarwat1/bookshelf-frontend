import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { publicBooksReducer } from './reducers/bookReducers';

const reducer = combineReducers({
    publicBooks: publicBooksReducer
});

const initialState = {};

const middleware = [thunk];

const store = legacy_createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));  

export default store; 