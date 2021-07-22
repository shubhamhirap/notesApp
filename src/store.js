import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import firebase from "./config/firebaseConfig"
import { indexReducer } from './reducers';


// const initialState = {}

const store = createStore(
    indexReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store