import { createSlice } from "@reduxjs/toolkit";
export const todoSlice=createSlice({
    name:'todo',
    initialState:{
        value:0,
        tasks:[],
    },
    reducers:{
        addTask: (state, action) => {
           // var obj = {id:action.payload[1], title:action.payload[0]}
            state.tasks.push(action.payload)
        },
        editTask: (state,action)=>{
            var obj = {id:action.payload[0], name:action.payload[1]}
          
            state.tasks[obj.id]=obj.name
            
        },
        deletetask:(state,action)=>{
            //console.log(action.payload,"I am Payload")
            state.tasks.splice(action.payload,1)

        }

    }
})
export const {addTask,editTask,deletetask}=todoSlice.actions
export default todoSlice.reducer