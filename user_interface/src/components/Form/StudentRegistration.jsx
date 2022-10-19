import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES } from "../../Redux/structureDatatype";
import {
  StudentRegister,
  setRegistrationStatus,
  selectRegisterData,
  selectRegisterationStatus,
} from "../../Redux/StudentReducer/studentReducer";
const StudentRegistration = () => {
  const dispatch = useDispatch();
  const registrationResponse = useSelector(selectRegisterData);
  const restrationStatus = useSelector(selectRegisterationStatus);
  const [studentDetails, setStudentDetails] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    emailId: "",
    adharNumber: "",
    gender: "",
    classId: "",
    phoneNumber: "",
    whatsappNumber: "",
    userId: "",
    password: "",
    admissionDate: "",
    birthDate: "",
    address: "",
  });

  useEffect(() => {
    function alertStatus() {
      if (restrationStatus === STATUSES.SUCCEEDED) {
        alert(registrationResponse.message);
        dispatch(setRegistrationStatus(STATUSES.IDLE));
      }
      else if (restrationStatus === STATUSES.ERROR){
        alert(registrationResponse.message);
        dispatch(setRegistrationStatus(STATUSES.IDLE));
      }
      
    }
    alertStatus();
  }, [restrationStatus]);
  
  const uploadData = () => {
    dispatch(StudentRegister(studentDetails));
  };

  const makeChanges = (e) => {
    setStudentDetails({ ...studentDetails, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="w-full flex md:flex-row flex-col mt-2  ">
        <div className="md:basis-1/2 md:pr-6 w-full">
          <img src="/images/registration1.jpg" className="w-full" alt="" />
        </div>
        <div className="md:basis-1/2 w-full p-4 ">
          <h1 className="text-center text-3xl font-medium py-6 ">
            {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-stone-700">
              STUDENT REGISTRATION
            </span>{" "}
          </h1>
          <div className="w-full py-5 ">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="fullName"
                onChange={(e) => makeChanges(e)}
                value={studentDetails.fullName}
                id="fullName"
                className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 placeholder-shown:border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                for="fullName"
                className="text-green-600 font-medium peer-placeholder-shown:font-normal  text-sm peer-focus:font-medium absolute peer-placeholder-shown:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Full Name
              </label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="fatherName"
                  onChange={(e) => makeChanges(e)}
                  value={studentDetails.fatherName}
                  id="fatherName"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 placeholder-shown:border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="fatherName"
                  className="text-green-600 font-medium  peer-placeholder-shown:font-normal text-sm peer-focus:font-medium absolute peer-placeholder-shown:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Father's Name
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="motherName"
                  onChange={(e) => makeChanges(e)}
                  value={studentDetails.motherName}
                  id="motherName"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 placeholder-shown:border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="motherName"
                  className="font-medium text-green-600 peer-placeholder-shown:font-normal text-sm peer-focus:font-medium absolute peer-placeholder-shown:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Mother's Name
                </label>
              </div>
            </div>

            {/* adhar number and email */}
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="email"
                  name="emailId"
                  onChange={(e) => makeChanges(e)}
                  value={studentDetails.emailId}
                  id="emailId"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 placeholder-shown:border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="emailId"
                  className="text-green-600 font-medium peer-placeholder-shown:font-normal text-sm peer-focus:font-medium absolute peer-placeholder-shown:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Pesonal Email-Id
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="number"
                  name="adharNumber"
                  onChange={(e) => makeChanges(e)}
                  value={studentDetails.adharNumber}
                  id="adharNumber"
                  className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 placeholder-shown:border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="adharNumber"
                  className="font-medium peer-placeholder-shown:font-normal text-green-600 text-sm peer-focus:font-medium absolute peer-placeholder-shown:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Adhar Number
                </label>
              </div>
            </div>

            {/* gender radio button */}

            <h3 className="mb-4 text-sm font-semibold text-gray-700 ">
              Gender
            </h3>
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border mb-4 border-gray-200 sm:flex ">
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                <div className="flex items-center pl-3">
                  <input
                    id="male"
                    type="radio"
                    value="male"
                    name="gender"
                    onChange={(e) => makeChanges(e)}
                    className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-green-500 "
                  />
                  <label
                    for="male"
                    className="py-3 ml-2 w-full text-sm font-medium text-gray-500 "
                  >
                    Male
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                <div className="flex items-center pl-3">
                  <input
                    id="female"
                    type="radio"
                    value="female"
                    name="gender"
                    onChange={(e) => makeChanges(e)}
                    className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-green-500 "
                  />
                  <label
                    for="female"
                    className="py-3 ml-2 w-full text-sm font-medium text-gray-500 "
                  >
                    Female
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                <div className="flex items-center pl-3">
                  <input
                    id="other"
                    type="radio"
                    value="other"
                    name="gender"
                    onChange={(e) => makeChanges(e)}
                    className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-green-500 "
                  />
                  <label
                    for="other"
                    className="py-3 ml-2 w-full text-sm font-medium text-gray-500 "
                  >
                    Other
                  </label>
                </div>
              </li>
            </ul>

            {/* classes */}

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="number"
                  name="classId"
                  id="class"
                  onChange={(e) => makeChanges(e)}
                  value={studentDetails.classId}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 placeholder-shown:border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  min="1"
                  max="10"
                  placeholder=" "
                  required=""
                />
                <label
                  for="class"
                  className="text-green-600 font-medium peer-placeholder-shown:font-normal text-sm peer-focus:font-medium absolute peer-placeholder-shown:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Class (from 1 to 10 )
                </label>
              </div>
            </div>

            {/* phone number  */}
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="number"
                  name="phoneNumber"
                  onChange={(e) => makeChanges(e)}
                  value={studentDetails.phoneNumber}
                  id="phoneNumber"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 placeholder-shown:border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="phoneNumber"
                  className="text-green-600 font-medium peer-placeholder-shown:font-normal text-sm peer-focus:font-medium absolute peer-placeholder-shown:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone Number
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="number"
                  name="whatsappNumber"
                  onChange={(e) => makeChanges(e)}
                  value={studentDetails.whatsappNumber}
                  id="whatsappNumber"
                  className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 placeholder-shown:border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="whatsappNumber"
                  className="font-medium peer-placeholder-shown:font-normal text-green-600 text-sm peer-focus:font-medium absolute peer-placeholder-shown:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Whatsapp Number
                </label>
              </div>
            </div>

            {/* userid & password  */}
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="userId"
                  onChange={(e) => makeChanges(e)}
                  value={studentDetails.userId}
                  id="userId"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 placeholder-shown:border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="userId"
                  className="text-green-600 font-medium peer-placeholder-shown:font-normal text-sm peer-focus:font-medium absolute peer-placeholder-shown:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  User-Id
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="password"
                  name="password"
                  onChange={(e) => makeChanges(e)}
                  value={studentDetails.password}
                  id="password"
                  className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 placeholder-shown:border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="password"
                  className="font-medium peer-placeholder-shown:font-normal text-green-600 text-sm peer-focus:font-medium absolute peer-placeholder-shown:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
            </div>

            {/* Birth date and joining date */}
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="date"
                  name="birthDate"
                  onChange={(e) => makeChanges(e)}
                  value={studentDetails.birthDate}
                  id="birthDate"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 placeholder-shown:border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="birthDate"
                  className="text-green-600 font-medium peer-placeholder-shown:font-normal text-sm peer-focus:font-medium absolute peer-placeholder-shown:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Birth Date
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="date"
                  name="admissionDate"
                  onChange={(e) => makeChanges(e)}
                  value={studentDetails.admissionDate}
                  id="admissionDate"
                  className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 placeholder-shown:border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="admissionDate"
                  className="font-medium peer-placeholder-shown:font-normal text-green-600 text-sm peer-focus:font-medium absolute peer-placeholder-shown:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Admission Date
                </label>
              </div>
            </div>

            {/* Address */}
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="address"
                onChange={(e) => makeChanges(e)}
                value={studentDetails.address}
                id="adress"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 placeholder-shown:border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                for="adress"
                className="text-green-600 font-medium peer-placeholder-shown:font-normal  text-sm peer-focus:font-medium absolute peer-placeholder-shown:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Address (post , district , state , pincode )
              </label>
            </div>
            <button
              onClick={uploadData}
              className="text-white bg-gradient-to-r from-stone-800 to-stone-700 hover:from-green-500 hover:to-green-700   focus:outline-none focus:ring-blue-300 font-medium rounded-sm  text-sm w-full sm:w-auto px-12 py-2.5 text-center "
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;
