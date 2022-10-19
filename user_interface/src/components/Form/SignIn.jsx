import React,{useState} from "react";
import { loginUser, setLogin } from "../../Redux/StudentReducer/userReducer";
import { useDispatch } from "react-redux";
import { USERTYPE } from "../../Redux/structureDatatype";
const SignIn = () => {
  const dispatch = useDispatch();
  const [activeUserType,setActiverUserType] = useState({
    student : 'bg-primary text-white',
    teacher : 'text-primary',
    admin : 'text-primary'
})
  const [loginDetails,setLoginDetails] = useState({
    userId : '',
    password : '',
    userType : USERTYPE.STUDENT
  });
  const tempLoginDetails = loginDetails;
  //it sets the userid and password
  const setDetails=(user)=>{
     setLoginDetails({...loginDetails,[user.name] : user.value});
  }

  const updateUserType = (user_type) =>{
    setLoginDetails({...loginDetails,["userType"]:user_type});
    const temp_ActiveUser = {student:'',teacher:'',admin:''};
    setActiverUserType({...temp_ActiveUser,[user_type]:'bg-primary text-white'});
  }

  const Login = () =>{
       dispatch(loginUser(loginDetails));//it call a thunk to post data to backend.
       setLoginDetails(tempLoginDetails);//it will reset the form data.
  } 
  return (
    <div className="w-full mt-12">
      <div className="relative flex flex-col shadow-sm shadow-gray-300 justify-center  md:w-2/5 w-full  mx-auto px-8 py-6">
        <img className="h-20 mb-5" src="/images/welcome.svg" alt="" />
  
        <div className="flex justify-center rounded-sm shadow-sm mb-4" role="group">
  <button onClick={()=>updateUserType(USERTYPE.STUDENT)} type="button" className={`${activeUserType.student} inline-flex items-center py-2 px-4 text-sm font-medium   rounded-l-lg border border-gray-900 hover:bg-primary hover:text-white focus:z-10 focus:ring-1 focus:ring-gray-500 focus:bg-primary focus:text-white `}>
    Student
  </button>
  <button onClick={()=>updateUserType(USERTYPE.TEACHER)} type="button" className={`${activeUserType.teacher} inline-flex items-center py-2 px-4 text-sm font-medium   border-t border-b border-gray-900 hover:bg-primary hover:text-white focus:z-10 focus:ring-1 focus:ring-gray-500 focus:bg-primary focus:text-white `}>
    Teacher
  </button>
  <button onClick={()=>updateUserType(USERTYPE.ADMIN)} type="button" className={`${activeUserType.admin} inline-flex items-center py-2 px-4 text-sm font-medium   rounded-r-md border border-gray-900 hover:bg-primary hover:text-white focus:z-10 focus:ring-1 focus:ring-gray-500 focus:bg-primary focus:text-white `}>
    Admin
  </button>
</div>

        <div className="relative my-2">
    <input name="userId" value={loginDetails.userId} onChange={(e)=>setDetails(e.target)} type="text" id="userid" className="block px-2.5 pb-2.5 pt-4 w-full text-sm border-green-500 placeholder-shown:border-gray-300 text-gray-900 bg-transparent rounded-sm border  appearance-none  focus:outline-none invalid:border-rose-500 focus:ring-0 focus:border-yellow-600 peer" placeholder=" " />
    <label for="userid" className="absolute text-sm  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-yellow-600 text-green-500 peer-placeholder-shown:text-gray-500 peer-invalid:text-rose-500 border-green-500 placeholder-shown:border-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">User-Id</label>
        </div>

        <div className="relative my-2 mb-5">
    <input name="password" value={loginDetails.password} onChange={(e)=>setDetails(e.target)} type="password" id="password" className="block px-2.5 pb-2.5 pt-4 w-full text-sm border-green-500 placeholder-shown:border-gray-300 text-gray-900 bg-transparent rounded-sm border  appearance-none  focus:outline-none invalid:border-rose-500 focus:ring-0 focus:border-yellow-600 peer" placeholder=" " />
    <label for="password" className="absolute text-sm  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-yellow-600 text-green-500 peer-placeholder-shown:text-gray-500 peer-invalid:text-rose-500 border-green-500 placeholder-shown:border-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
        </div>

        <button onClick={Login} className="px-5 py-2 text-white rounded-sm font-medium shadow-md shadow-gray-400 bg-primary hover:bg-primary-text transition-all duration-300 ">SIGN IN</button>
      </div>
    </div>
  );
};

export default SignIn;
