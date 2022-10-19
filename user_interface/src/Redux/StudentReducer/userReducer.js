import { createSlice } from "@reduxjs/toolkit";
import { LOGIN , USERTYPE , STATUSES } from "../structureDatatype";
import axios from 'axios';
const initialState = {
    isUserLogin: LOGIN.FALSE,
    userDetails : {},
    userType : '',
    loginStatus: STATUSES.IDLE,
    loginMessage:''
}

const userSlice = createSlice({
    name:'userRed',
    initialState,
    reducers :{
        setLogin : (state,action) => {

        }
    }
})

export default userSlice.reducer;
export const {setLogin} = userSlice.actions;

// THUNK
export function loginUser(login_details){
       return function loginUserThunk(dispatch , getstate){
        const userType = login_details.userType;
         axios.post('http://localhost:5000/login/'+userType,login_details)
         .then((response)=>{
             console.log("response from login : " , response);
         })
         .catch((err)=>{
            console.log("error is " + err);
         })
       }
}