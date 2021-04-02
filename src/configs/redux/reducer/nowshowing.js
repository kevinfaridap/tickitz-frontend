const initialState = {
    nowshowingmovies: [],
    loading: false,
    error: ''
}

const nowShowingReducer = (state = initialState, action) =>{
    switch(action.type) {
    case 'GET_NOWSHOWING_MOVIES' :
        return{
        ...state,
        nowshowingmovies: action.payload
    }
    default:
        return state;
    }
}


export default nowShowingReducer 