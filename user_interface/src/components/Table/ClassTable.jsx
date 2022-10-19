import React from 'react'
import { getStudentList } from '../../Redux/StudentReducer/classReducer';
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';

const ClassTable = () => {
    const StudentList = useSelector(getStudentList);
    const [studentList,setStudentList] = useState([]);
    useEffect(()=>{
     setStudentList(StudentList);
    },[StudentList])
  return (
    <div>
        
<div class="overflow-x-auto relative shadow-md sm:rounded-lg border ">
    <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="py-3 px-6">
                    User id
                </th>
                <th scope="col" class="py-3 px-6">
                    Student Name
                </th>
                <th scope="col" class="py-3 px-6">
                    Email-id
                </th>
                <th scope="col" class="py-3 px-6">
                    Attendace
                </th>
                <th scope="col" class="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                studentList.map((curElem,index)=>{
                    return (
                        <tr class="bg-white border-b " key={curElem.userId + index}>
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                            {curElem.userId}
                        </th>
                        <td class="py-4 px-6">
                            {curElem.fullName}
                        </td>
                        <td class="py-4 px-6">
                            {curElem.emailId}
                        </td>
                        <td class="py-4 px-6">
                            {curElem.attendance}
                        </td>
                        <td class="py-4 px-6">
                            <a href="#" class="font-medium text-blue-600  hover:underline">Edit</a>
                        </td>
                    </tr>
                    )
                })
            }
            
          
        </tbody>
    </table>
</div>

    </div>
  )
}

export default ClassTable