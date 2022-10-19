import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
const initialState = {
    studentList : [],
    classId : null
}

const classSlice = createSlice ({
    name : 'class',
    initialState,
    reducers:{
        setStudentList : (state, action) =>{
             state.studentList = action.payload.student_list;
             state.classId = action.payload.class_Id;
             
             
        }
    }
});

export const {setStudentList} = classSlice.actions;
export const getStudentList = (state)=> state.classReducer.studentList;
export const classId = (state) => state.classReducer.classId;
export default classSlice.reducer;

//THUNK

export function callStudentList (classId){
    return function callstudentListThunk (dispatch, getstate){
        axios.post('http://localhost:5000/databases/classList',classId)
        .then((response)=>{
            const student_list = response.data.student_list;
            // console.log(response.data.student_list);
            dispatch(setStudentList({student_list : student_list, class_id : classId}));
            // console.log("student are " + student_list);
           
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}