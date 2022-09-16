import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUSES } from "../structureDatatype";
import { setStatus } from "../StudentReducer/studentReducer";
const initialState = {
    list:[],
    status:STATUSES.LOADING
};

const DatabaseSlice = createSlice({
    name:'databaseRed',
    initialState,
    reducers:{
        setDatabase : (state,action)=>{
          state.list = action.payload;
        }
        ,
        setStatus : (state,action)=>{
          state.status = action.payload;
        }
    }
});

export default DatabaseSlice.reducer;
export const {setDatabase} = DatabaseSlice.actions;
export const getDatabaseList = (state) => state.DatabaseRed.list;


// Thunk
export function CallDatabase(){
    return function(dispatch,getstate){
         axios.get('http://localhost:5000/databases')
         .then((response)=>{
            console.log(response);
         dispatch(setDatabase(response.data));
         dispatch(setStatus(STATUSES.IDLE));
         })
         .catch((err)=>{
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
         })
    }
}
