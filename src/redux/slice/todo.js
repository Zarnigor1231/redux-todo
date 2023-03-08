import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../hooks/localstorage";

const initialState = loadState("Todo") || [
]

const Todo = createSlice({
    name:"Todo list",
    initialState:initialState,
    reducers:{
        addInfoBtn:(state,action) => {
            if(action.payload !== ''){
                return ([...state , {info:action.payload , id:state.length+1}])
            }
            else{
               alert('No Text')
            }
        },
        delInfoBtn:(state , action) => {
           return state.filter((item) => item.id !== action.payload)
        },
        editInfoBtn:(state , action ) => {
           return state.map((item) => item.id === action.payload.id ? action.payload : item)
        }
    }
})

export const  { addInfoBtn , delInfoBtn , editInfoBtn } = Todo.actions

export default Todo.reducer