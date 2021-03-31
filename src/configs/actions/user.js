import axios from 'axios'

const loginRequest = () => {
  return {type: 'LOGIN_REQUEST'}
} 
const loginSuccess = (dataUser) => {
  return {type: 'LOGIN_SUCCESS', payload: dataUser }
}
const loginFailure = (error) =>{
  return {type: 'LOGIN_FAILURE', payload: error}
}

export const login = (data) => (dispatch) => {
  return new Promise((resolve, reject)=> {
    dispatch(loginRequest())
      axios.post('http://localhost:8000/v1/users/login/', data)
      .then((res) => {
        const dataUser = res.data
        // console.log(dataUser);
        // ganti dengan loginSuccess
        // dispatch({ type : 'POST_LOGIN', payload: dataUser })
        dispatch(loginSuccess(dataUser))
        localStorage.setItem('token', dataUser.data.token)
        resolve(dataUser)
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginFailure('Check Your email or password'))
        reject(err)
      }) 
    })
  }
  