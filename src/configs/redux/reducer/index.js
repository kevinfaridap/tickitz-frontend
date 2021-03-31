import {combineReducers} from 'redux'
import userReducer from './user'
import moviesReducer from './movies'

const rootReducer = combineReducers({
    user: userReducer,
    movies: moviesReducer,
})


export default rootReducer