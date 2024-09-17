import {USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL } from "../constants/userConstants"
import axios from 'axios'
import { USER_LOGOUT } from "../constants/userConstants"
import {USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL, } from "../constants/userConstants"

export const login=(email,password)=>async(dispatch)=>{
    try{
        dispatch({
            type:USER_LOGIN_REQUEST
        })

        const config={
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data}=await axios.post("https://teskoodude.pythonanywhere.com/api/users/login/",
            {'username':email,
             'password':password
            },
            config
        )
      
        dispatch({
                type:USER_LOGIN_SUCCESS,
                payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))
    }
    catch(error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                        ? error.response.data.detail
                        : error.message,
        });

}
}

export const logout=()=>(dispatch)=>{
    localStorage.removeItem('userInfo')
    dispatch({type:USER_LOGOUT})
}





export const register=(Firstname,Lastname,email,password)=>async(dispatch)=>{
    try{
        dispatch({
            type:USER_REGISTER_REQUEST
        })

        const config={
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data}=await axios.post("https://teskoodude.pythonanywhere.com/api/users/register/",
            {'fname':Firstname,
             'lname':Lastname,
             'email':email,
             'password':password
            },
            config
        )
        dispatch({
                type:USER_REGISTER_SUCCESS,
                payload:data
        })

    }
    catch(error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                        ? error.response.data.detail
                        : error.message,
        });

}
}