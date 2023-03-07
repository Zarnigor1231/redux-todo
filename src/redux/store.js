import  { configureStore  } from '@reduxjs/toolkit'
import Todo from './slice/todo'

const Store = configureStore({
    reducer:{
        Todo,
    }
})

export default Store