import thunk from "redux-thunk"
import { createStore, applyMiddleware } from 'redux'
import combineReducer from "./redux/index";




const store = createStore(combineReducer,applyMiddleware(thunk));

console.log(`>>>>>>>store>>>>>>>>`,store)

export default store