import {configureStore} from '@reduxjs/toolkit';
import studentReducer from './StudentReducer/studentReducer';
import databaseReducer from './DatabaseReducer/DatabaseReducer';
import classReducer from './StudentReducer/classReducer';
import userReducer from './StudentReducer/userReducer';
const store = configureStore({
    reducer:{
        studentRed : studentReducer,
        DatabaseRed:databaseReducer,
        classReducer : classReducer,
        userReducer:userReducer
    },
})

export default store;