import {configureStore} from '@reduxjs/toolkit';
import studentReducer from './StudentReducer/studentReducer';
import databaseReducer from './DatabaseReducer/DatabaseReducer';
const store = configureStore({
    reducer:{
        studentRed : studentReducer,
        DatabaseRed:databaseReducer
    },
})

export default store;