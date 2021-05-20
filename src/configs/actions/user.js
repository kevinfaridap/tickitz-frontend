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
      axios.post(`${process.env.REACT_APP_API}/users/login/`, data)
      .then((res) => {
        const dataUser = res.data
        // console.log(dataUser);
        // ganti dengan loginSuccess
        // dispatch({ type : 'POST_LOGIN', payload: dataUser })
        dispatch(loginSuccess(dataUser))
        localStorage.setItem('token', dataUser.data.token)
        // console.log(dataUser, 'inidatausernya');
        resolve(dataUser)
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginFailure('Check Your email or password'))
        reject(err)
      }) 
    })
  }


export const register = (data) => dispatch=>{
  return new Promise((resolve, reject)=>{
    axios.post(`${process.env.REACT_APP_API}/users/register`, data)
    .then((res)=>{
      const result = res.data 
      dispatch({type: 'USER_REGISTER'})
      resolve(result)
    })
    .catch((err)=>{
      reject(err)
    })
  })
}

export const updateImage = (data, iduser) => dispatch=>{
  return new Promise((resolve, reject)=>{
    axios.put(`${process.env.REACT_APP_API}/users/updateimage/`)
    .then((res)=>{
      const result = res.data 
      dispatch({type: 'UPDATE_IMG', payload: result})
      resolve(result)
    })
    .catch((err)=>{
      reject(err)
    })
  })
}

  