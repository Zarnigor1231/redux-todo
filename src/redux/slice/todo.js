import { createSlice } from "@reduxjs/toolkit";

const initialState =[
]

const Todo = createSlice({
    name:"Todo list",
    initialState:initialState,
    reducers:{
        addInfoBtn:(state,action) => {
            return ([...state , {info:action.payload , id:state.length+1}])
        },
        delInfoBtn:(state , action) => {
           return state.filter((item) => item.id !== action.payload)
        },
        editInfoBtn:(state , action ) => {
            return
        }
    }
})

export const  { addInfoBtn , delInfoBtn } = Todo.actions

export default Todo.reducer