import axios from 'axios'
import { useEffect } from 'react';
const axiosSecure = axios.create({
    baseURL:'https://car-doctor-server-bay-eight.vercel.app',
    withCredentials:true
})
import useAuth from './UseAuth'
import { useNavigate } from "react-router-dom"

const useAxiosSecure = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate()
    useEffect( () => {
        axiosSecure.interceptors.response.use(res => {
            return res
        }, error=> {
            console.log(error.response)
                if(error.response.status === 401 || error.response.status === 403)
                {
                    console.log('Logout the user',); 
                    logOut()
                    .then(() => {
                        navigate('/login')
                    })
                    .catch(error => console.log(error))
                }
        })
    },[])

    return axiosSecure
};

export default useAxiosSecure;