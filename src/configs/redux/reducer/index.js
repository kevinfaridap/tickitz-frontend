import {combineReducers} from 'redux'
import userReducer from './user'
import moviesReducer from './movies'
import nowShowingReducer from './nowshowing'

const rootReducer = combineReducers({
    user: userReducer,
    movies: moviesReducer,
    nowshowingmovies: nowShowingReducer,
})


export default rootReducer