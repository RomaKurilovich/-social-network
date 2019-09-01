
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import profilePageReducer from './profilePageReducer';
import {reducer as formReducer } from 'redux-form'
import loginReducer from './loginReducer';
import peopleReducer from './peopleReducer';
import friendsReducer from './friendsPageReducer';
import messagePageReducer from './messagePageReducer';

let combinedReducers = combineReducers({
    profilePage: profilePageReducer,
    form: formReducer,
    login: loginReducer,
    people: peopleReducer,
    friends: friendsReducer,
    messagePage: messagePageReducer,
});


let store = createStore(combinedReducers,applyMiddleware(thunk));
window.store = store;
export default store ; 
