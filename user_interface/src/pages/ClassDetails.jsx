import React from 'react'
import { useState ,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import ClassTable from '../components/Table/ClassTable';
import classApi from '../DataApi/classApi';
import { callStudentList,getStudentList } from '../Redux/StudentReducer/classReducer';
import { useDispatch, useSelector } from "react-redux";
const ClassDetails = () => {
    const {classId} = useParams();
    const dispatch = useDispatch();
    const StudentList = useSelector(getStudentList);
    const [studentStrength,setStudentStrength] = useState('');
    const [teacherName,setTeacherName] = useState('');
    useEffect(()=>{
     setStudentStrength(StudentList.length);
     const class_details = classApi.filter((curElem) => curElem.classId === classId)
     setTeacherName(class_details[0].teacherName); // filter is returning an array
     showStudentList();
    },[])

    function showStudentList (){
      
      dispatch(callStudentList({classId : classId}));
    }
  return (
    <div className='py-8 lg:px-24 md:px-12 px-2'>
     <h1 className='text-2xl py-5 text-center bg-primary font-bold text-white mb-5'>CLASS : {classId}</h1>
     <div className='flex justify-between py-4 '>
        <h1 className='text-md font-semibold text-primary'> Class Teacher : {teacherName}</h1>
        <h1 className='text-md font-semibold text-primary'>Total students: {studentStrength}</h1>
    </div> 
    <ClassTable/>
    </div>
  )
}

export default ClassDetails