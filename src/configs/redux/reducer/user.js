const initialState = {
    user: {
      idUser: null,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      role: '',
    },
    loading: false,
    error: ''
}

const userReducer = (state = initialState, action) =>{
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload  
        },
        loading: false
      }
    case 'LOGIN_FAILURE':
      return{
        ...state,
        loading: false,
        error: action.payload
      }
  
    default:
      return state
  }
}


export default userReducer