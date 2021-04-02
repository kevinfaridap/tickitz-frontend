import swal from 'sweetalert'

const axios = require('axios')
const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
    async config => {
        config.headers = {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`,
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });


// Untuk respone axiosnya, disini respone jika invalid token
axiosApiInstance.interceptors.response.use((response)=>{
    return response
}, async function (error){
    if (error.response.status === 401) {
        if(error.response.data.error.message === 'Invalid Signature!'){
            swal('Invalid Token !')
            localStorage.removeItem('token')
        }
        if(error.response.data.error.message === 'Jwt expired'){
            localStorage.removeItem('token')
            swal('Token Expired !')
        }
    }
})
  



export default axiosApiInstance