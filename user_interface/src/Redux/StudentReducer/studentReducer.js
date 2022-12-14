import {createSlice} from '@reduxjs/toolkit';
import {STATUSES} from '../structureDatatype';
import axios from 'axios';
const initialState={
    information:{data:{},status:''},
    registerationStatus:STATUSES.IDLE,
};
const studentSlice = createSlice({
name:'student',
initialState,
reducers:{
    setRegister:(state,action)=>{
        console.log("inside Register action");
        console.log(action.payload.status + action.payload.data);
        state.information.data=action.payload.data;
        state.information.status=action.payload.status;
        console.log(state.information.data);
    },
    setRegistrationStatus:(state,action)=>{
        state.registerationStatus=action.payload;
        console.log(state.registerationStatus);
    }
}
});

export const {setRegister,setRegistrationStatus} = studentSlice.actions;
export const selectRegisterData = (state) => state.studentRed.information.data;
export const selectRegisterationStatus = (state) => state.studentRed.registerationStatus;
export default studentSlice.reducer;

// THUNK
export function StudentRegister (StudentData){
    return   function StudentRegisterThunk(dispatch,getState){
        dispatch(setRegistrationStatus(STATUSES.LOADING));
      
          
              axios.post('http://localhost:5000/studentregister',StudentData)
             .then((response)=>{
                dispatch(setRegister(response));
                dispatch(setRegistrationStatus(STATUSES.SUCCEEDED));
                console.log(response);
             })
             .catch((err)=>{
                console.log("error inside catch");
                console.log(err.response);
                dispatch(setRegister(err.response));
                dispatch(setRegistrationStatus(STATUSES.ERROR));
             })
            
                
    }
}